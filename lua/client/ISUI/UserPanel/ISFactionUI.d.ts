/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      drawPlayers: ((y: any, item: any, alt: any) => any) | any;

      onAnswerFactionInvite: ((button: any) => any) | any;

      onChangeTag: ((button: any) => any) | any;

      onChangeTitle: ((button: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onClickFactionPvp: ((clickedOption: any, enabled: any) => any) | any;

      onClickShowTag: ((clickedOption: any, enabled: any) => any) | any;

      onPickedTagColor: ((color: any, mouseUp: any) => any) | any;

      onQuitFaction: ((button: any) => any) | any;

      onRemovePlayerFromFaction: ((button: any, player: any) => any) | any;

      onTagColor: ((button: any) => any) | any;

      populateList: (() => any) | any;

      render: (() => any) | any;

      updateButtons: (() => any) | any;

      /** @noSelf */
      static AcceptedFactionInvite: (factionName: any, host: any) => any;

      /** @noSelf */
      static ReceiveFactionInvite: (factionName: any, host: any) => any;

      /** @noSelf */
      static SyncFaction: (factionName: any) => any;
    }
  }
  export namespace lua.client.ISUI.UserPanel.ISFactionUI {}
}
