/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISTakeWaterAction:new */
    export class ISTakeWaterAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fluidobject: any;

      item: any;

      sound: any;

      waterObject: any;

      waterTaintedCL: any;

      constructor(character: any, item: any, waterObject: any, waterTaintedCL: any);

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;

      serverStop(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISTakeWaterAction {}
}
