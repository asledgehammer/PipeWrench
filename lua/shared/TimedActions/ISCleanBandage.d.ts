/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISCleanBandage:new */
    export class ISCleanBandage extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      recipe: any;

      result: any;

      sound: any;

      waterObject: any;

      constructor(character: any, item: any, waterObject: any, recipe: any);

      complete(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISCleanBandage {}
}
