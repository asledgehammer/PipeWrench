/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      doPlayerListContextMenu(player: any, x: any, y: any, ...__args: never[]): any;

      drawPlayers(y: any, item: any, alt: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onCommand(player: any, command: any, ...__args: never[]): any;

      onRightMousePlayerList(x: any, y: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      /** @noSelf */
      static OnMiniScoreboardUpdate: (...__args: never[]) => any;

      /** @noSelf */
      static onScoreboardUpdate: (usernames: any, displayNames: any, steamIDs: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISMiniScoreboardUI {}
}
