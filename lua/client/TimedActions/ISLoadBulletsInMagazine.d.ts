/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISLoadBulletsInMagazine:new */
    export class ISLoadBulletsInMagazine extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ammoCount: any;

      ammoCountStart: any;

      loadFinished: any;

      magazine: any;

      playedInsertAmmoStartSound: any;

      useProgressBar: any;

      constructor(character: any, magazine: any, ammoCount: any);

      animEvent: ((event: any, parameter: any) => any) | any;

      initVars: (() => any) | any;

      isLoadFinished: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISLoadBulletsInMagazine {}
}
