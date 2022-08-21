/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISStatisticsUI:new */
    export class ISStatisticsUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      moveWithMouse: any;

      player: any;

      playerNum: any;

      constructor(x: any, y: any, player: any);
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISStatisticsUI {}
}
