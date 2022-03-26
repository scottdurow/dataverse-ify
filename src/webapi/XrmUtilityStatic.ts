/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { WebApiStatic } from "./WebApiStatic";
export class NodeXrmUtilityStatic implements Xrm.Utility {
  getLearningPathAttributeName(): string {
    throw new Error("Method not implemented.");
  }
  getPageContext(): Xrm.PageContext {
    throw new Error("Method not implemented.");
  }
  closeProgressIndicator(): void {
    throw new Error("Not implemented");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAllowedStatusTransitions(_entityName: string, _stateCode: number): Xrm.Async.PromiseLike<any> {
    throw new Error("Not implemented");
  }
  getEntityMetadata(entityName: string, attributes?: string[]): Xrm.Async.PromiseLike<Xrm.Metadata.EntityMetadata> {
    const webApi = (Xrm.WebApi as object) as WebApiStatic;
    return (webApi.getEntityMetadata(entityName, attributes) as unknown) as Xrm.Async.PromiseLike<
      Xrm.Metadata.EntityMetadata
    >;
  }
  getGlobalContext(): Xrm.GlobalContext {
    throw new Error("Not implemented");
  }
  getResourceString(_webResourceName: string, _key: string): string {
    throw new Error("Not implemented");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  invokeProcessAction(_name: string, _parameters: Xrm.Collection.Dictionary<any>): Xrm.Async.PromiseLike<any> {
    throw new Error("Not implemented");
  }
  lookupObjects(_lookupOptions: Xrm.LookupOptions): Xrm.Async.PromiseLike<Xrm.LookupValue[]> {
    throw new Error("Not implemented");
  }
  refreshParentGrid(_lookupOptions: Xrm.LookupValue): void {
    throw new Error("Not implemented");
  }
  showProgressIndicator(_message: string): void {
    throw new Error("Not implemented");
  }
  alertDialog(_message: string, _onCloseCallback: () => void): void {
    throw new Error("Not implemented");
  }
  confirmDialog(_message: string, _yesCloseCallback: () => void, _noCloseCallback: () => void): void {
    throw new Error("Not implemented");
  }
  isActivityType(_entityType: string): boolean {
    throw new Error("Not implemented");
  }
  openQuickCreate(
    _entityLogicalName: string,
    _createFromEntity?: Xrm.LookupValue,
    _parameters?: Xrm.Utility.OpenParameters,
  ): Xrm.Async.PromiseLike<Xrm.Async.OpenQuickCreateSuccessCallbackObject> {
    throw new Error("Not implemented");
  }
  openEntityForm(
    _name: string,
    _id?: string,
    _parameters?: Xrm.Utility.FormOpenParameters,
    _windowOptions?: Xrm.Utility.WindowOptions,
  ): void {
    throw new Error("Not implemented");
  }
  openWebResource(_webResourceName: string, _webResourceData?: string, _width?: number, _height?: number): Window {
    throw new Error("Not implemented");
  }
}
