/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISSmashWindow:new */
    export class ISSmashWindow extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      useProgressBar: any;

      vehiclePart: any;

      window: any;

      constructor(character: any, window: any, vehiclePart: any);

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISSmashWindow {}
}
