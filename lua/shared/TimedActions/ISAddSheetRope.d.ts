/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISAddSheetRope:new */
    export class ISAddSheetRope extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      sheetRope: any;

      window: any;

      constructor(character: any, window: any, sheetRope: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISAddSheetRope {}
}
