/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      onAddItem(button: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      removeSelectedItem(...__args: never[]): any;

      render(...__args: never[]): any;

      requestDatas(...__args: never[]): any;

      /** @noSelf */
      static ReceiveItems: (itemtable: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsManageInvUI {}
}
