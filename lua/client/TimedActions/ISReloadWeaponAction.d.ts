/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISReloadWeaponAction:new */
    export class ISReloadWeaponAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ammoCount: any;

      ammoCountStart: any;

      bullets: any;

      gun: any;

      playedInsertAmmoStartSound: any;

      reloading: any;

      useProgressBar: any;

      constructor(character: any, gun: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      ejectSpentRounds(...__args: never[]): any;

      initVars(...__args: never[]): any;

      loadAmmo(...__args: never[]): any;

      /** @noSelf */
      static attackHook: (character: any, chargeDelta: any, weapon: any, ...__args: never[]) => any;

      /** @noSelf */
      static BeginAutomaticReload: (playerObj: any, gun: any, ...__args: never[]) => any;

      /** @noSelf */
      static canRack: (weapon: any, ...__args: never[]) => any;

      /** @noSelf */
      static canShoot: (weapon: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnPlayerAttackFinished: (playerObj: any, weapon: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnPressRackButton: (player: any, gun: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnPressReloadButton: (player: any, gun: any, ...__args: never[]) => any;

      /** @noSelf */
      static onShoot: (player: any, weapon: any, ...__args: never[]) => any;

      /** @noSelf */
      static ReloadBestMagazine: (playerObj: any, gun: any, ...__args: never[]) => any;

      /** @noSelf */
      static setReloadSpeed: (character: any, rack: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.TimedActions.ISReloadWeaponAction {}
}
