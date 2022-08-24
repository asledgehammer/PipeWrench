/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Reloading {
    /** @customConstructor ISReloadAction:new */
    export class ISReloadAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      mgr: any;

      reloadable: any;

      reloadWeapon: any;

      square: any;

      constructor(reloadManager: any, char: any, square: any, time: any);
    }
  }
  export namespace lua.shared.Reloading.ISReloadAction {}
}
