/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISAddSheetAction:new */
    export class ISAddSheetAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      constructor(character: any, item: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISAddSheetAction {}
}
