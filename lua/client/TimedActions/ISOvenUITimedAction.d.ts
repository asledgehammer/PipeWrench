/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISOvenUITimedAction:new */
    export class ISOvenUITimedAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      mcwave: any;

      stove: any;

      constructor(character: any, stove: any, mcwave: any);
    }
  }
  export namespace lua.client.TimedActions.ISOvenUITimedAction {}
}
