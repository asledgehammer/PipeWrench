/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISFactionsList:new */
    export class ISFactionsList extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      datas: any;

      no: any;

      player: any;

      selectedFaction: any;

      viewBtn: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      onClick: ((button: any) => any) | any;

      populateList: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISFactionsList {}
}
