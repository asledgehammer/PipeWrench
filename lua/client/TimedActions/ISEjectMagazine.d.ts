/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISEjectMagazine:new */
    export class ISEjectMagazine extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      gun: any;

      useProgressBar: any;

      constructor(character: any, gun: any);

      animEvent: ((event: any, parameter: any) => any) | any;

      initVars: (() => any) | any;

      unloadAmmo: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISEjectMagazine {}
}
