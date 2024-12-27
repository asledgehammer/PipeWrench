/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISDesignationZonePanel:new */
    export class ISDesignationZonePanel extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      addZone: any;

      buttonBorderColor: any;

      currentWidth: any;

      moveWithMouse: any;

      player: any;

      playerNum: any;

      removeZone: any;

      renameZone: any;

      selectedZone: any;

      zoneList: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      drawList(y: any, item: any, alt: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onRemoveZone(button: any, ...__args: never[]): any;

      onRenameZoneClick(button: any, animal: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      updateButtons(...__args: never[]): any;

      /** @noSelf */
      static toggleZoneUI: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISDesignationZonePanel {}
}
