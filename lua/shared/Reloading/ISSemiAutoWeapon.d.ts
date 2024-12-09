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

      createMagazine(...__args: never[]): any;

      getRackTime(...__args: never[]): any;

      getReloadTime(...__args: never[]): any;

      isChainReloading(...__args: never[]): any;

      isReloadValidEasy(char: any, square: any, ...__args: never[]): any;

      isReloadValidHard(char: any, square: any, ...__args: never[]): any;

      isReloadValidNormal(char: any, square: any, ...__args: never[]): any;

      printReloadableWeaponDetails(...__args: never[]): any;

      printWeaponDetails(item: any, ...__args: never[]): any;

      rackingPerform(char: any, square: any, weapon: any, ...__args: never[]): any;

      rackingStart(char: any, square: any, weapon: any, ...__args: never[]): any;

      reloadPerformEasy(char: any, square: any, weapon: any, ...__args: never[]): any;

      reloadPerformNormal(char: any, square: any, weapon: any, ...__args: never[]): any;

      reloadStartEasy(char: any, square: any, ...__args: never[]): any;

      reloadStartNormal(char: any, square: any, ...__args: never[]): any;

      setupMagazine(magazine: any, ...__args: never[]): any;
    }
  }
  export namespace lua.shared.Reloading.ISSemiAutoWeapon {}
}
