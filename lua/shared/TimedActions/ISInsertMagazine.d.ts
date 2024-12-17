/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISInsertMagazine:new */
    export class ISInsertMagazine extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      gun: any;

      loadFinished: any;

      magazine: any;

      useProgressBar: any;

      constructor(character: any, gun: any, magazine: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      initVars(...__args: never[]): any;

      loadAmmo(...__args: never[]): any;

      serverStart(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISInsertMagazine {}
}
