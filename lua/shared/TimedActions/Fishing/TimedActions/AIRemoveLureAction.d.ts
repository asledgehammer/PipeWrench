/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Fishing.TimedActions {
    /** @customConstructor AIRemoveLureAction:new */
    export class AIRemoveLureAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      rod: any;

      sound: any;

      constructor(character: any, rod: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Fishing.TimedActions.AIRemoveLureAction {}
}
