/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Reloading {
    /** @customConstructor ISReloadUtil:new */
    export class ISReloadUtil extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      addMagazineType(magazineType: any, ...__args: never[]): any;

      addWeaponType(weaponType: any, ...__args: never[]): any;

      canReload(item: any, ...__args: never[]): any;

      getClipData(magazineType: any, ...__args: never[]): any;

      getReloadableForPlayer(reloadClass: any, playerObj: any, ...__args: never[]): any;

      getReloadableWeapon(weapon: any, player: any, ...__args: never[]): any;

      getReloadText(item: any, player: any, ...__args: never[]): any;

      getWeaponData(weaponType: any, ...__args: never[]): any;

      isReloadable(item: any, player: any, ...__args: never[]): any;

      setUpGun(weapon: any, playerObj: any, ...__args: never[]): any;

      setupMagazine(magazine: any, clipData: any, playerObj: any, ...__args: never[]): any;

      syncItemToReloadable(item: any, player: any, ...__args: never[]): any;
    }
  }
  export namespace lua.shared.Reloading.ISReloadUtil {}
}
