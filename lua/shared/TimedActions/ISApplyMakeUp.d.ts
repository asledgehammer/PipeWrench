/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISApplyMakeUp:new */
    export class ISApplyMakeUp extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      type: any;

      constructor(character: any, item: any, type: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISApplyMakeUp {}
}
