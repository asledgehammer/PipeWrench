/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Reloading {
    /** @customConstructor ISShotgunWeapon:new */
    export class ISShotgunWeapon extends lua.shared.Reloading.ISReloadableWeapon {
      [id: string]: any;
      static [id: string]: any;

      currentCapacity: any;

      emptyShellChambered: any;

      reloadInProgress: any;

      roundChambered: any;

      constructor();

      getRackTime: (() => any) | any;

      getReloadTime: (() => any) | any;

      printReloadableWeaponDetails: (() => any) | any;

      printWeaponDetails: ((item: any) => any) | any;

      rackingPerform: ((char: any, square: any, weapon: any) => any) | any;

      rackingStart: ((char: any, square: any, weapon: any) => any) | any;
    }
  }
  export namespace lua.shared.Reloading.ISShotgunWeapon {}
}
