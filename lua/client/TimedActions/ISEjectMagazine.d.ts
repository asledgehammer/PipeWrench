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

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      initVars(...__args: never[]): any;

      unloadAmmo(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISEjectMagazine {}
}
