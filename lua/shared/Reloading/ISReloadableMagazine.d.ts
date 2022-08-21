/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Reloading {
    /** @customConstructor ISReloadableMagazine:new */
    export class ISReloadableMagazine extends lua.shared.Reloading.ISReloadable {
      [id: string]: any;
      static [id: string]: any;

      clipType: any;

      reloadInProgress: any;

      constructor();

      getRackTime: (() => any) | any;

      rackingPerform: ((char: any, square: any, weapon: any) => any) | any;

      rackingStart: ((char: any, square: any, weapon: any) => any) | any;
    }
  }
  export namespace lua.shared.Reloading.ISReloadableMagazine {}
}
