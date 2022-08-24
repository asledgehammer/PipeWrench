/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.UserPanel {
    /** @customConstructor ISSafehouseAddPlayerUI:new */
    export class ISSafehouseAddPlayerUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      addPlayer: any;

      isOwner: any;

      no: any;

      player: any;

      playerList: any;

      safehouse: any;

      scoreboard: any;

      constructor(x: any, y: any, width: any, height: any, safehouse: any, player: any);

      drawPlayers: ((y: any, item: any, alt: any) => any) | any;

      onClick: ((button: any) => any) | any;

      populateList: (() => any) | any;

      /** @noSelf */
      static OnMiniScoreboardUpdate: () => any;

      /** @noSelf */
      static OnScoreboardUpdate: (usernames: any, displayNames: any, steamIDs: any) => any;
    }
  }
  export namespace lua.client.ISUI.UserPanel.ISSafehouseAddPlayerUI {}
}
