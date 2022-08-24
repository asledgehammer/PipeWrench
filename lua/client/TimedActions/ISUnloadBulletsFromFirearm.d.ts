/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISUnloadBulletsFromFirearm:new */
    export class ISUnloadBulletsFromFirearm extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ammoCountStart: any;

      gun: any;

      playedEjectAmmoStartSound: any;

      unloadFinished: any;

      useProgressBar: any;

      constructor(character: any, gun: any);

      animEvent: ((event: any, parameter: any) => any) | any;

      initVars: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISUnloadBulletsFromFirearm {}
}
