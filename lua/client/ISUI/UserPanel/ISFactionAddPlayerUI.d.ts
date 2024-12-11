/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.UserPanel {
    /** @customConstructor ISFactionAddPlayerUI:new */
    export class ISFactionAddPlayerUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addPlayer: any;

      faction: any;

      isOwner: any;

      no: any;

      player: any;

      playerList: any;

      constructor(x: any, y: any, width: any, height: any, faction: any, player: any);

      drawPlayers(y: any, item: any, alt: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      /** @noSelf */
      static OnMiniScoreboardUpdate: (...__args: never[]) => any;

      /** @noSelf */
      static OnScoreboardUpdate: (usernames: any, displayNames: any, steamIDs: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.UserPanel.ISFactionAddPlayerUI {}
}
