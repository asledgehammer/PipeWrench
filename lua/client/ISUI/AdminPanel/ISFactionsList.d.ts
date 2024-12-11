/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISFactionsList {}
}
