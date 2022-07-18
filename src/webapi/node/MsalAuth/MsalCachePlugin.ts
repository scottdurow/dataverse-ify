import { ICachePlugin, TokenCacheContext } from "@azure/msal-node";
import { constants } from "fs";
import fs from "fs/promises";
import os from "os";
import path from "path";
import Cryptr from "cryptr";

// This is a encrypted auth token cache
// IDeally we should use msal-node-extensions to provide a secure storage of tokens
// See https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-node-migration#enable-token-caching
// However - this library does not come with pre-compiled native libraries
// See https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/3332
function getAuthCachePath(): string {
  const homeDirPath = os.homedir();
  return path.join(homeDirPath, "dataverse-auth-cache");
}

function getCrypto(): Cryptr {
  return new Cryptr(os.userInfo().username);
}

// Call back APIs which automatically write and read into a .json file - example implementation
const beforeCacheAccess = async (cacheContext: TokenCacheContext): Promise<void> => {
  const cachePath = getAuthCachePath();
  let exists = true;
  try {
    await fs.access(cachePath, constants.R_OK | constants.W_OK);
  } catch {
    exists = false;
  }
  if (exists) {
    try {
      const cache = await fs.readFile(cachePath, "utf-8");
      cacheContext.tokenCache.deserialize(getCrypto().decrypt(cache));
    } catch (e) {
      console.warn(e);
    }
  }
};

const afterCacheAccess = async (cacheContext: TokenCacheContext): Promise<void> => {
  if (cacheContext.cacheHasChanged) {
    const data = getCrypto().encrypt(cacheContext.tokenCache.serialize());
    await fs.writeFile(getAuthCachePath(), data);
  }
};

// Cache Plugin
export const MsalCachePlugin: ICachePlugin = {
  beforeCacheAccess,
  afterCacheAccess,
};
