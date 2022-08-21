/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Reloading {
    /** @customConstructor ISSemiAutoWeapon:new */
    export class ISSemiAutoWeapon extends lua.shared.Reloading.ISReloadableWeapon {
      [id: string]: any;
      static [id: string]: any;

      clipIcon: any;

      clipName: any;

      containsClip: any;

      currentCapacity: any;

      insertClipText: any;

      reloadInProgress: any;

      reloadText: any;

      removeClipText: any;

      roundChambered: any;

      constructor();

      createMagazine: (() => any) | any;

      getRackTime: (() => any) | any;

      getReloadTime: (() => any) | any;

      isChainReloading: (() => any) | any;

      isReloadValidEasy: ((char: any, square: any) => any) | any;

      isReloadValidHard: ((char: any, square: any) => any) | any;

      isReloadValidNormal: ((char: any, square: any) => any) | any;

      printReloadableWeaponDetails: (() => any) | any;

      printWeaponDetails: ((item: any) => any) | any;

      rackingPerform: ((char: any, square: any, weapon: any) => any) | any;

      rackingStart: ((char: any, square: any, weapon: any) => any) | any;

      reloadPerformEasy: ((char: any, square: any, weapon: any) => any) | any;

      reloadPerformNormal: ((char: any, square: any, weapon: any) => any) | any;

      reloadStartEasy: ((char: any, square: any) => any) | any;

      reloadStartNormal: ((char: any, square: any) => any) | any;

      setupMagazine: ((magazine: any) => any) | any;
    }
  }
  export namespace lua.shared.Reloading.ISSemiAutoWeapon {}
}
