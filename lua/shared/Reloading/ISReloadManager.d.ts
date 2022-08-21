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

      autoRackNeeded: (() => any) | any;

      checkLoaded: ((character: any, chargeDelta: any) => any) | any;

      checkRackConditions: (() => any) | any;

      checkReloadConditions: (() => any) | any;

      fireShot: ((wielder: any, weapon: any, difficulty: any) => any) | any;

      getDifficulty: (() => any) | any;

      getDifficultyDescription: ((difficulty: any) => any) | any;

      isWeaponReloadable: (() => any) | any;

      printManagerDetails: (() => any) | any;

      printReloadableDetails: (() => any) | any;

      printWeaponModDetails: (() => any) | any;

      rackingNow: (() => any) | any;

      rackingStarted: (() => any) | any;

      reloadStarted: (() => any) | any;

      setDifficulty: ((newDifficulty: any) => any) | any;

      startRackFromUi: ((item: any) => any) | any;

      startRacking: (() => any) | any;

      startReloadFromUi: ((item: any) => any) | any;

      startReloading: (() => any) | any;

      stopRacking: (() => any) | any;

      stopReload: ((noSound: any) => any) | any;

      stopReloadSuccess: (() => any) | any;
    }

    export abstract class aaa {
      static [id: string]: any;

      /** @noSelf */
      static checkLoadedHook: (character: any, chargeDelta: any) => any;

      /** @noSelf */
      static fireShotHook: (wielder: any, weapon: any) => any;

      /** @noSelf */
      static startRackingHook: (pl: any) => any;

      /** @noSelf */
      static startReloadHook: (pl: any) => any;
    }
  }
  export namespace lua.shared.Reloading.ISReloadManager {}
}
