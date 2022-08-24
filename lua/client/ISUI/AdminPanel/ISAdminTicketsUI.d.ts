/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISAdminTicketsUI:new */
    export class ISAdminTicketsUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      answerTicketBtn: any;

      datas: any;

      listHeaderColor: any;

      no: any;

      player: any;

      refreshBtn: any;

      removeBtn: any;

      selectedFaction: any;

      selectedTicket: any;

      tickets: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      getTickets: (() => any) | any;

      onAnswerTicket: ((button: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onRemoveTicket: ((button: any) => any) | any;

      populateList: (() => any) | any;

      render: (() => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static gotTickets: (tickets: any) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISAdminTicketsUI {}
}
