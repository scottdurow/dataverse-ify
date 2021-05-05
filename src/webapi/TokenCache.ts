import { TokenResponse, AuthenticationContext } from "adal-node";
import * as os from "os";
import * as path from "path";
import * as fs from "fs";
import Cryptr = require("cryptr");
export interface TokenCache {
  [index: string]: string;
}
let _inMemoryTokenCache: TokenCache | undefined;

function getAuthCachePath(): string {
  const homeDirPath = os.homedir();
  const authCachePath = path.join(homeDirPath, "cds-auth-cache");
  return authCachePath;
}
function getCrypto(): Cryptr {
  const cryptr = new Cryptr(os.userInfo.name);
  return cryptr;
}
export function loadTokenCache(): TokenCache {
  if (!_inMemoryTokenCache) {
    const authCachePath = getAuthCachePath();
    let tokenCache = {} as TokenCache;

    // Load existing file if there is one
    if (fs.existsSync(authCachePath)) {
      const tokenCacheJSON = fs.readFileSync(authCachePath);
      tokenCache = (JSON.parse(tokenCacheJSON.toString()) as unknown) as TokenCache;
    }
    _inMemoryTokenCache = tokenCache;
  }
  return _inMemoryTokenCache;
}

export function addTokenToCache(envUrl: string, token: TokenResponse): void {
  const tokenCache = loadTokenCache();
  // Encrypt - not 100% secure, but just so we are not putting down plain text
  const jsonToken = JSON.stringify(token);
  const jsonTokenEncrypyed = getCrypto().encrypt(jsonToken);
  // Add to the token cache
  tokenCache[envUrl] = jsonTokenEncrypyed;
  _inMemoryTokenCache = tokenCache;
  fs.writeFileSync(getAuthCachePath(), JSON.stringify(tokenCache));
}

export function getTokenFromCache(envUrl: string): TokenResponse {
  const tokenCache = loadTokenCache();
  const tokenEncrypted = tokenCache[envUrl];
  if (!tokenEncrypted) {
    throw new Error(`No token found for environment ${envUrl}`);
  }
  const jsonToken = getCrypto().decrypt(tokenEncrypted);
  return JSON.parse(jsonToken) as TokenResponse;
}
export function getAccessToken(envUrl: string): Promise<string> {
  return new Promise<string>(function(resolve, reject) {
    let accessToken = "";
    const token = getTokenFromCache(envUrl);
    const context = new AuthenticationContext("https://login.windows.net/common");
    const server = "https://" + envUrl;
    const clientId = "51f81489-12ee-4a9e-aaae-a2591f45987d"; // Client ID used by Microsoft samples
    // Check if the token has expired
    const expiryDate = new Date(Date.parse(token.expiresOn.toString()));
    const nowDate = new Date();
    const expiresInMinutes = (((expiryDate as unknown) as number) - ((nowDate as unknown) as number)) / 1000 / 60;
    const hasTokenExpired = expiresInMinutes < 5;
    if (hasTokenExpired) {
      // Get new token using refresh token
      context.acquireTokenWithRefreshToken(token.refreshToken as string, clientId, server, (err, tokenResponse) => {
        if (err) {
          console.debug("Error:" + err);
          reject(err);
        } else {
          const newToken = tokenResponse as TokenResponse;
          console.debug(`Token refreshed until: ${(tokenResponse as TokenResponse).expiresOn}`);
          addTokenToCache(envUrl, newToken);
          accessToken = newToken.accessToken;
          resolve(accessToken);
        }
      });
    } else {
      // Use current token
      accessToken = token.accessToken;
      resolve(accessToken);
    }
  });
}
