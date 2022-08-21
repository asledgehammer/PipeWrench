/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISPvpZonePanel:new */
    export class ISPvpZonePanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addZone: any;

      buttonBorderColor: any;

      no: any;

      nonPvpList: any;

      player: any;

      removeZone: any;

      seeZoneOnGround: any;

      selectedZone: any;

      teleportToZone: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      drawList: ((y: any, item: any, alt: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onRemoveZone: ((button: any) => any) | any;

      populateList: (() => any) | any;

      render: (() => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISPvpZonePanel {}
}
