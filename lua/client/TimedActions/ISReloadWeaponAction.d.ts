/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISReloadWeaponAction:new */
    export class ISReloadWeaponAction extends lua.shared.TimedActions.ISBaseTimedAction {
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

      animEvent: ((event: any, parameter: any) => any) | any;

      ejectSpentRounds: (() => any) | any;

      initVars: (() => any) | any;

      loadAmmo: (() => any) | any;

      /** @noSelf */
      static attackHook: (character: any, chargeDelta: any, weapon: any) => any;

      /** @noSelf */
      static BeginAutomaticReload: (playerObj: any, gun: any) => any;

      /** @noSelf */
      static canRack: (weapon: any) => any;

      /** @noSelf */
      static canShoot: (weapon: any) => any;

      /** @noSelf */
      static OnPlayerAttackFinished: (playerObj: any, weapon: any) => any;

      /** @noSelf */
      static OnPressRackButton: (player: any, gun: any) => any;

      /** @noSelf */
      static OnPressReloadButton: (player: any, gun: any) => any;

      /** @noSelf */
      static onShoot: (player: any, weapon: any) => any;

      /** @noSelf */
      static ReloadBestMagazine: (playerObj: any, gun: any) => any;

      /** @noSelf */
      static setReloadSpeed: (character: any, rack: any) => any;
    }
  }
  export namespace lua.client.TimedActions.ISReloadWeaponAction {}
}
