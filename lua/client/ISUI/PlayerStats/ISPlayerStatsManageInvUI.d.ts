/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.PlayerStats {
    /** @customConstructor ISPlayerStatsManageInvUI:new */
    export class ISPlayerStatsManageInvUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addItemBtn: any;

      capacityWeight: any;

      datas: any;

      equippedIcon: any;

      getItemBtn: any;

      listHeaderColor: any;

      maxWeight: any;

      no: any;

      player: any;

      refreshBtn: any;

      removeBtn: any;

      selectedItem: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      onAddItem: ((button: any) => any) | any;

      onClick: ((button: any) => any) | any;

      populateList: (() => any) | any;

      removeSelectedItem: (() => any) | any;

      render: (() => any) | any;

      requestDatas: (() => any) | any;

      /** @noSelf */
      static ReceiveItems: (itemtable: any) => any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsManageInvUI {}
}
