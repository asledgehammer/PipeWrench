/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, joypadData: any, ...__args: never[]): any;

      reloadButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.LastStand.ISUI.ISChallenge2UpgradeTab {}
}
