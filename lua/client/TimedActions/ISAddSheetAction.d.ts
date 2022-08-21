/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISAddSheetAction:new */
    export class ISAddSheetAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      constructor(character: any, item: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISAddSheetAction {}
}
