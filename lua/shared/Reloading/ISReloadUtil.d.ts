/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Reloading {
    /** @customConstructor ISReloadUtil:new */
    export class ISReloadUtil extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      addMagazineType: ((magazineType: any) => any) | any;

      addWeaponType: ((weaponType: any) => any) | any;

      canReload: ((item: any) => any) | any;

      getClipData: ((magazineType: any) => any) | any;

      getReloadableForPlayer: ((reloadClass: any, playerObj: any) => any) | any;

      getReloadableWeapon: ((weapon: any, player: any) => any) | any;

      getReloadText: ((item: any, player: any) => any) | any;

      getWeaponData: ((weaponType: any) => any) | any;

      isReloadable: ((item: any, player: any) => any) | any;

      setUpGun: ((weapon: any, playerObj: any) => any) | any;

      setupMagazine: ((magazine: any, clipData: any, playerObj: any) => any) | any;

      syncItemToReloadable: ((item: any, player: any) => any) | any;
    }
  }
  export namespace lua.shared.Reloading.ISReloadUtil {}
}
