/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISToggleSafetyAction:new */
    export class ISToggleSafetyAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ignoreHandsWounds: any;

      isSafety: any;

      constructor(character: any);
    }
  }
  export namespace lua.client.TimedActions.ISToggleSafetyAction {}
}
