/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.UserPanel {
    /** @customConstructor ISSafehouseUI:new */
    export class ISSafehouseUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      addPlayer: any;

      addPlayerUI: any;

      buttonBorderColor: any;

      changeOwnership: any;

      changeTitle: any;

      no: any;

      owner: any;

      player: any;

      playerList: any;

      pos: any;

      quitSafehouse: any;

      refreshPlayerList: any;

      releaseSafehouse: any;

      removePlayer: any;

      respawn: any;

      safehouse: any;

      selectedPlayer: any;

      title: any;

      updateTick: any;

      updateTickMax: any;

      constructor(x: any, y: any, width: any, height: any, safehouse: any, player: any);

      drawPlayers: ((y: any, item: any, alt: any) => any) | any;

      hasPrivilegedAccessLevel: (() => any) | any;

      isOwner: (() => any) | any;

      onAnswerSafehouseInvite: ((button: any) => any) | any;

      onChangeTitle: ((button: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onClickRespawn: ((clickedOption: any, enabled: any) => any) | any;

      onQuitSafehouse: ((button: any) => any) | any;

      onReleaseSafehouse: ((button: any, player: any) => any) | any;

      onRemovePlayerFromSafehouse: ((button: any, player: any) => any) | any;

      populateList: (() => any) | any;

      render: (() => any) | any;

      updateButtons: (() => any) | any;

      updatePlayerList: (() => any) | any;

      /** @noSelf */
      static AcceptedSafehouseInvite: (safehouseName: any, host: any) => any;

      /** @noSelf */
      static OnSafehousesChanged: () => any;

      /** @noSelf */
      static ReceiveSafehouseInvite: (safehouse: any, host: any) => any;
    }
  }
  export namespace lua.client.ISUI.UserPanel.ISSafehouseUI {}
}
