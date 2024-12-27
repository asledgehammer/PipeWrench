/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISOpenCloseWindow:new */
    export class ISOpenCloseWindow extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ignoreHandsWounds: any;

      object: any;

      useProgressBar: any;

      constructor(character: any, object: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISOpenCloseWindow {}
}
