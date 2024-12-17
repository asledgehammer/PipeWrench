/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISUnloadBulletsFromMagazine:new */
    export class ISUnloadBulletsFromMagazine extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ammoCountStart: any;

      magazine: any;

      unloadFinished: any;

      useProgressBar: any;

      constructor(character: any, magazine: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      initVars(...__args: never[]): any;

      serverStart(...__args: never[]): any;

      serverStop(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISUnloadBulletsFromMagazine {}
}
