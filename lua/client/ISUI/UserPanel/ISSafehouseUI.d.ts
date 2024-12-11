/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      drawPlayers(y: any, item: any, alt: any, ...__args: never[]): any;

      hasPrivilegedAccessLevel(...__args: never[]): any;

      isOwner(...__args: never[]): any;

      onAnswerSafehouseInvite(button: any, ...__args: never[]): any;

      onChangeTitle(button: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onClickRespawn(clickedOption: any, enabled: any, ...__args: never[]): any;

      onQuitSafehouse(button: any, ...__args: never[]): any;

      onReleaseSafehouse(button: any, player: any, ...__args: never[]): any;

      onRemovePlayerFromSafehouse(button: any, player: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      render(...__args: never[]): any;

      updateButtons(...__args: never[]): any;

      updatePlayerList(...__args: never[]): any;

      /** @noSelf */
      static AcceptedSafehouseInvite: (safehouseName: any, host: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSafehousesChanged: (...__args: never[]) => any;

      /** @noSelf */
      static ReceiveSafehouseInvite: (safehouse: any, host: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.UserPanel.ISSafehouseUI {}
}
