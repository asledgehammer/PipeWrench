/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.UserPanel {
    /** @customConstructor ISTicketsUI:new */
    export class ISTicketsUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addTicketBtn: any;

      datas: any;

      listHeaderColor: any;

      no: any;

      player: any;

      selectedFaction: any;

      tickets: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      getTickets: (() => any) | any;

      onAddTicket: ((button: any) => any) | any;

      onClick: ((button: any) => any) | any;

      populateList: (() => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static gotTickets: (tickets: any) => any;
    }
  }
  export namespace lua.client.ISUI.UserPanel.ISTicketsUI {}
}
