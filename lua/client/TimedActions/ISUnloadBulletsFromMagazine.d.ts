/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISUnloadBulletsFromMagazine:new */
    export class ISUnloadBulletsFromMagazine extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ammoCountStart: any;

      magazine: any;

      unloadFinished: any;

      useProgressBar: any;

      constructor(character: any, magazine: any);

      animEvent: ((event: any, parameter: any) => any) | any;

      initVars: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISUnloadBulletsFromMagazine {}
}
