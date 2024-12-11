/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      drawList(y: any, item: any, alt: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onRemoveZone(button: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      render(...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISPvpZonePanel {}
}
