/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISClimbSheetRopeAction:new */
    export class ISClimbSheetRopeAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      down: any;

      constructor(character: any, down: any);
    }
  }
  export namespace lua.client.TimedActions.ISClimbSheetRopeAction {}
}
