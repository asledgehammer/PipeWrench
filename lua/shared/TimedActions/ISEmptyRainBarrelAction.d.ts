/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISEmptyRainBarrelAction:new */
    export class ISEmptyRainBarrelAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      object: any;

      sound: any;

      startAmount: any;

      constructor(character: any, object: any);

      complete(...__args: never[]): any;

      serverStop(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISEmptyRainBarrelAction {}
}
