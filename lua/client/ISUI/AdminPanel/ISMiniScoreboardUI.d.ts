/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISMiniScoreboardUI:new */
    export class ISMiniScoreboardUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      admin: any;

      no: any;

      playerList: any;

      scoreboard: any;

      selected: any;

      constructor(x: any, y: any, width: any, height: any, admin: any);

      doPlayerListContextMenu: ((player: any, x: any, y: any) => any) | any;

      drawPlayers: ((y: any, item: any, alt: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onCommand: ((player: any, command: any) => any) | any;

      onRightMousePlayerList: ((x: any, y: any) => any) | any;

      populateList: (() => any) | any;

      /** @noSelf */
      static OnMiniScoreboardUpdate: () => any;

      /** @noSelf */
      static onScoreboardUpdate: (usernames: any, displayNames: any, steamIDs: any) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISMiniScoreboardUI {}
}
