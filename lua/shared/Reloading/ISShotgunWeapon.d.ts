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

      getRackTime(...__args: never[]): any;

      getReloadTime(...__args: never[]): any;

      printReloadableWeaponDetails(...__args: never[]): any;

      printWeaponDetails(item: any, ...__args: never[]): any;

      rackingPerform(char: any, square: any, weapon: any, ...__args: never[]): any;

      rackingStart(char: any, square: any, weapon: any, ...__args: never[]): any;
    }
  }
  export namespace lua.shared.Reloading.ISShotgunWeapon {}
}
