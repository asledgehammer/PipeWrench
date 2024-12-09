/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Reloading {
    /** @customConstructor ISReloadManager:new */
    export class ISReloadManager extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      chainReload: any;

      kIsPressed: any;

      lastClickTime: any;

      playerid: any;

      rackingAction: any;

      reloadable: any;

      reloadAction: any;

      reloadWeapon: any;

      rIsPressed: any;

      spaceIsPressed: any;

      constructor(player: any);

      autoRackNeeded(...__args: never[]): any;

      checkLoaded(character: any, chargeDelta: any, ...__args: never[]): any;

      checkRackConditions(...__args: never[]): any;

      checkReloadConditions(...__args: never[]): any;

      fireShot(wielder: any, weapon: any, difficulty: any, ...__args: never[]): any;

      getDifficulty(...__args: never[]): any;

      getDifficultyDescription(difficulty: any, ...__args: never[]): any;

      isWeaponReloadable(...__args: never[]): any;

      printManagerDetails(...__args: never[]): any;

      printReloadableDetails(...__args: never[]): any;

      printWeaponModDetails(...__args: never[]): any;

      rackingNow(...__args: never[]): any;

      rackingStarted(...__args: never[]): any;

      reloadStarted(...__args: never[]): any;

      setDifficulty(newDifficulty: any, ...__args: never[]): any;

      startRackFromUi(item: any, ...__args: never[]): any;

      startRacking(...__args: never[]): any;

      startReloadFromUi(item: any, ...__args: never[]): any;

      startReloading(...__args: never[]): any;

      stopRacking(...__args: never[]): any;

      stopReload(noSound: any, ...__args: never[]): any;

      stopReloadSuccess(...__args: never[]): any;
    }

    export abstract class aaa {
      static [id: string]: any;

      /** @noSelf */
      static checkLoadedHook: (character: any, chargeDelta: any, ...__args: never[]) => any;

      /** @noSelf */
      static fireShotHook: (wielder: any, weapon: any, ...__args: never[]) => any;

      /** @noSelf */
      static startRackingHook: (pl: any, ...__args: never[]) => any;

      /** @noSelf */
      static startReloadHook: (pl: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Reloading.ISReloadManager {}
}
