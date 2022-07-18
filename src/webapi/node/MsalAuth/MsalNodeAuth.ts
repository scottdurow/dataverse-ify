import * as path from "path";
import {
  AccountInfo,
  AuthenticationResult,
  AuthorizationCodeRequest,
  ClientCredentialRequest,
  ConfidentialClientApplication,
  Configuration,
  DeviceCodeRequest,
  NodeAuthOptions,
  PublicClientApplication,
  SilentFlowRequest,
} from "@azure/msal-node";
import fetch from "node-fetch";
import * as fs from "fs";
import * as os from "os";
import { msalConfig } from "./MsalConfig";
import { ILoggerCallback, LogLevel } from "@azure/msal-common";
import { MsalCachePlugin } from "./MsalCachePlugin";

export interface UserLookup {
  [index: string]: string;
}
let userNameLookup: UserLookup | undefined;
let msalClient: PublicClientApplication | undefined;

function getLookupPath(): string {
  const homeDirPath = os.homedir();
  return path.join(homeDirPath, "./dataverse-auth-users");
}

function loadLookup(): UserLookup {
  if (!userNameLookup) {
    userNameLookup = {};
    // Lookup the saved account using the environment url
    const authCachePath = getLookupPath();
    // Load existing file if there is one
    if (fs.existsSync(authCachePath)) {
      const tokenCacheJSON = fs.readFileSync(authCachePath);
      userNameLookup = JSON.parse(tokenCacheJSON.toString()) as unknown as UserLookup;
    }
  }
  return userNameLookup as UserLookup;
}

function saveLookup(): void {
  fs.writeFileSync(getLookupPath(), JSON.stringify(userNameLookup));
}

export function getUserNameByEnvUrl(environmentUrl: string): string | undefined {
  const env = environmentUrl.toLowerCase();
  const lookup = loadLookup();
  if (Object.keys(lookup).indexOf(env) > -1) {
    return lookup[env];
  }
  return undefined;
}

export function saveAccountByEnvUrl(environmentUrl: string, account: AccountInfo): void {
  const lookup = loadLookup();
  const env = environmentUrl.toLowerCase();
  lookup[env] = account.username;
  saveLookup();
}

export function removeAccountByEnvUrl(environmentUrl: string): void {
  const lookup = loadLookup();
  const env = environmentUrl.toLowerCase();
  delete lookup[env];
  saveLookup();
}

export function getAllUsers(): { userName: string; environment: string }[] {
  const lookup = loadLookup();
  return Object.keys(lookup).map((environment) => {
    return { userName: lookup[environment], environment };
  });
}
function normalizeEnvUrl(environmentUrl: string) {
  return environmentUrl.toLowerCase().trim().replace(/\/$/, "");
}
export function getAccountByEnvUrl(accounts: AccountInfo[], environmentUrl: string): AccountInfo | undefined {
  const user = getUserNameByEnvUrl(normalizeEnvUrl(environmentUrl));
  if (user) {
    return accounts.find((a) => a.username === user);
  }
  return undefined;
}

async function getMsalClient(
  logger?: ILoggerCallback,
  additionalConfig?: Partial<NodeAuthOptions>,
): Promise<PublicClientApplication> {
  if (!msalClient) {
    const publicClientConfig = {
      auth: {
        ...{
          clientId: msalConfig.clientId,
          authority: "https://login.windows.net/common",
        },
        ...additionalConfig,
      },
      system: {
        loggerOptions: {
          loggerCallback: logger,
          logLevel: logger ? LogLevel.Verbose : undefined,
          piiLoggingEnabled: true,
        },
      },
      cache: {
        cachePlugin: MsalCachePlugin,
      },
    } as Configuration;
    msalClient = new PublicClientApplication(publicClientConfig);
  }

  return msalClient;
}

export async function acquireTokenByCodeMsal(
  environmentUrl: string,
  authCode: string,
  logger?: ILoggerCallback,
): Promise<AuthenticationResult | null> {
  const client = await getMsalClient(logger);
  const envUrl = normalizeEnvUrl(environmentUrl);
  const response = await client.acquireTokenByCode({
    code: authCode,
    redirectUri: msalConfig.redirectUrl,
    scopes: ["openid", `https://${envUrl}/.default`],
  } as AuthorizationCodeRequest);
  if (response && response.account) {
    // Test connection to environment
    const userId = await whoAmI(envUrl, response);
    if (logger) logger(LogLevel.Verbose, `Dataverse userId ${userId}`, false);
    // Save user profile
    saveAccountByEnvUrl(envUrl, response.account);
  } else {
    throw `Authentication for ${envUrl} was unsuccessful`;
  }

  return response;
}

export async function acquireTokenByClientSecret(
  environmentUrl: string,
  tenantID: string,
  clientId: string,
  clientSecret: string,
  logger?: ILoggerCallback,
): Promise<string> {
  const clientConfig = {
    auth: {
      clientId: clientId,
      authority: `https://login.windows.net/${tenantID}`,
      clientSecret: clientSecret,
    },
    system: {
      loggerOptions: {
        loggerCallback: logger,
        logLevel: logger ? LogLevel.Verbose : undefined,
        piiLoggingEnabled: true,
      },
    },
  };
  const cca = new ConfidentialClientApplication(clientConfig);

  const envUrl = normalizeEnvUrl(environmentUrl);

  const clientCredentialRequest = {
    scopes: [`https://${envUrl}/.default`], // replace with your resource
  } as ClientCredentialRequest;

  const response = await cca.acquireTokenByClientCredential(clientCredentialRequest);

  if (response && response.accessToken) {
    // Test connection to environment
    const userId = await whoAmI(envUrl, response);
    if (logger) logger(LogLevel.Verbose, `Dataverse userId ${userId}`, false);

    return response.accessToken;
  } else {
    throw `Authentication for ${envUrl} was unsuccessful`;
  }
}

export async function acquireTokenUsingDeviceCode(
  environmentUrl: string,
  logger?: ILoggerCallback,
): Promise<AuthenticationResult | null> {
  const client = await getMsalClient(logger);
  const envUrl = normalizeEnvUrl(environmentUrl);
  const response = await client.acquireTokenByDeviceCode({
    redirectUri: msalConfig.redirectUrl,
    scopes: ["openid", `https://${envUrl}/.default`],
    deviceCodeCallback: (response) => {
      console.log(response.message);
    },
  } as DeviceCodeRequest);
  if (response && response.account) {
    // Test connection to environment
    const userId = await whoAmI(envUrl, response);
    if (logger) logger(LogLevel.Verbose, `Dataverse userId ${userId}`, false);
    // Save user profile
    saveAccountByEnvUrl(envUrl, response.account);
  } else {
    throw `Authentication for ${envUrl} was unsuccessful`;
  }
  return response;
}

export async function removeToken(environmentUrl: string): Promise<void> {
  const client = await getMsalClient();
  const envUrl = normalizeEnvUrl(environmentUrl);
  const accounts = await client.getTokenCache().getAllAccounts();
  const account = getAccountByEnvUrl(accounts, envUrl);
  if (!account) throw "Cannot find profile for environment.";
  client.getTokenCache().removeAccount(account);
  removeAccountByEnvUrl(envUrl);
}

export async function acquireToken(environmentUrl: string, logger?: ILoggerCallback): Promise<string> {
  // Find the account for the given environment
  const client = await getMsalClient(logger);
  const envUrl = normalizeEnvUrl(environmentUrl);
  const accounts = await client.getTokenCache().getAllAccounts();
  // Find the account for the given environment
  const account = getAccountByEnvUrl(accounts, envUrl);
  if (!account) throw `Cannot find profile for environment. Run 'dataverse-auth ${envUrl}`;

  const scopes = ["openid", `https://${envUrl}/.default`];
  const response = await client.acquireTokenSilent({ account: account, scopes: scopes } as SilentFlowRequest);
  if (response && response.account) {
    // Test connection to environment
    const userId = await whoAmI(envUrl, response);
    if (logger) logger(LogLevel.Verbose, `Dataverse userId ${userId}`, false);

    return response.accessToken;
  } else {
    throw `Authentication for ${envUrl} was unsuccessful`;
  }
}
async function whoAmI(environmentUrl: string, response: AuthenticationResult): Promise<string> {
  const envUrl = normalizeEnvUrl(environmentUrl);
  const whoAmIResponse = await fetch(`https://${envUrl}/api/data/v9.2/WhoAmI()`, {
    method: "GET",
    headers: {
      "OData-MaxVersion": "4.0",
      "OData-Version": "4.0",
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${response.accessToken}`,
    },
  });
  if (whoAmIResponse.status !== 200) {
    throw `WhoAmI request failed with ${whoAmIResponse.statusText}`;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const whoAmIResponseData = (await whoAmIResponse.json()) as any;
  return whoAmIResponseData.UserId as string;
}
