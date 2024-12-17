/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISDumpWaterAction:new */
    export class ISDumpWaterAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sound: any;

      startUsedDelta: any;

      constructor(character: any, item: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;

      stopSound(...__args: never[]): any;

      updateDumpingWater(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISDumpWaterAction {}
}
