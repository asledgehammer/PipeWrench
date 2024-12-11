/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.UserPanel {
    /** @customConstructor ISFactionUI:new */
    export class ISFactionUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addPlayer: any;

      addPlayerUI: any;

      buttonBorderColor: any;

      changeOwnership: any;

      changeTag: any;

      changeTitle: any;

      colorPicker: any;

      faction: any;

      factionPvp: any;

      isAdmin: any;

      isOwner: any;

      no: any;

      owner: any;

      player: any;

      playerList: any;

      quitFaction: any;

      releaseFaction: any;

      removePlayer: any;

      selectedPlayer: any;

      showTag: any;

      tag: any;

      tagColor: any;

      tagColorBtn: any;

      constructor(x: any, y: any, width: any, height: any, faction: any, player: any);

      drawPlayers(y: any, item: any, alt: any, ...__args: never[]): any;

      onAnswerFactionInvite(button: any, ...__args: never[]): any;

      onChangeTag(button: any, ...__args: never[]): any;

      onChangeTitle(button: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onClickFactionPvp(clickedOption: any, enabled: any, ...__args: never[]): any;

      onClickShowTag(clickedOption: any, enabled: any, ...__args: never[]): any;

      onPickedTagColor(color: any, mouseUp: any, ...__args: never[]): any;

      onQuitFaction(button: any, ...__args: never[]): any;

      onRemovePlayerFromFaction(button: any, player: any, ...__args: never[]): any;

      onTagColor(button: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      render(...__args: never[]): any;

      updateButtons(...__args: never[]): any;

      /** @noSelf */
      static AcceptedFactionInvite: (factionName: any, host: any, ...__args: never[]) => any;

      /** @noSelf */
      static ReceiveFactionInvite: (factionName: any, host: any, ...__args: never[]) => any;

      /** @noSelf */
      static SyncFaction: (factionName: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.UserPanel.ISFactionUI {}
}
