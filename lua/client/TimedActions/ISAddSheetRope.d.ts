/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISAddSheetRope:new */
    export class ISAddSheetRope extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      window: any;

      constructor(character: any, window: any);
    }
  }
  export namespace lua.client.TimedActions.ISAddSheetRope {}
}
