/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.LastStand.ISUI {
    /** @customConstructor ISChallenge2UpgradeTab:new */
    export class ISChallenge2UpgradeTab extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      itemScreen: any;

      panel: any;

      playerId: any;

      playerScreen: any;

      repairScreen: any;

      weaponScreen: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any, joypadData: any) => any) | any;

      reloadButtons: (() => any) | any;
    }
  }
  export namespace lua.client.LastStand.ISUI.ISChallenge2UpgradeTab {}
}
