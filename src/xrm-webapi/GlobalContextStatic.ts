/* eslint-disable @typescript-eslint/no-unused-vars */
import { XrmStatic } from "./XrmStatic";
export class GlobalContextStatic {
  private _userId: string;
  constructor(userId: string) {
    this._userId = userId;
  }
  client?: Xrm.ClientContext;
  organizationSettings?: Xrm.OrganizationSettings;
  userSettings?: Xrm.UserSettings;
  getAdvancedConfigSetting(_setting: "MaxChildIncidentNumber" | "MaxIncidentMergeNumber"): number {
    throw new Error("Method not implemented.");
  }
  getClientUrl(): string {
    // Return the full url of the endpoint in the form "https://org.crm11.dynamics.com"
    return XrmStatic.webapiInstance.getClientUrl().toString();
  }
  getCurrentAppName(): Xrm.Async.PromiseLike<string> {
    throw new Error("Method not implemented.");
  }
  getCurrentAppProperties(): Xrm.Async.PromiseLike<Xrm.AppProperties> {
    throw new Error("Method not implemented.");
  }
  getCurrentAppUrl(): string {
    throw new Error("Method not implemented.");
  }
  getCurrentTheme(): Xrm.Theme {
    throw new Error("Method not implemented.");
  }
  getIsAutoSaveEnabled(): boolean {
    throw new Error("Method not implemented.");
  }
  getOrgLcid(): number {
    throw new Error("Method not implemented.");
  }
  getOrgUniqueName(): string {
    throw new Error("Method not implemented.");
  }
  getQueryStringParameters(): {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: any;
  } {
    throw new Error("Method not implemented.");
  }
  getTimeZoneOffsetMinutes(): number {
    throw new Error("Method not implemented.");
  }
  getUserId(): string {
    return this._userId;
  }
  getUserLcid(): number {
    throw new Error("Method not implemented.");
  }
  getUserName(): string {
    throw new Error("Method not implemented.");
  }
  getUserRoles(): string[] {
    throw new Error("Method not implemented.");
  }
  getVersion(): string {
    return XrmStatic.webapiInstance.apiVersion;
  }
  isOnPremise(): boolean {
    throw new Error("Method not implemented.");
  }
  prependOrgName(_path: string): string {
    throw new Error("Method not implemented.");
  }
}
