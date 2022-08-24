/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      onClick: ((button: any) => any) | any;

      populateList: (() => any) | any;

      /** @noSelf */
      static OnSafehousesChanged: () => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISSafehousesList {}
}
