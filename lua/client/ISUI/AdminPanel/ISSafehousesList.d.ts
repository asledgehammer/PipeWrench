/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISSafehousesList:new */
    export class ISSafehousesList extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      datas: any;

      no: any;

      player: any;

      selectedFaction: any;

      teleportBtn: any;

      viewBtn: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      /** @noSelf */
      static OnSafehousesChanged: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISSafehousesList {}
}
