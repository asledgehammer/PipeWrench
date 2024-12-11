/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      getTickets(...__args: never[]): any;

      onAnswerTicket(button: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onRemoveTicket(button: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static gotTickets: (tickets: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISAdminTicketsUI {}
}
