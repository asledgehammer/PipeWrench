/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISRemoveSheetRope:new */
    export class ISRemoveSheetRope extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      window: any;

      constructor(character: any, window: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISRemoveSheetRope {}
}
