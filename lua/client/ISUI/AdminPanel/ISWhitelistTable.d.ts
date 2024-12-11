/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISWhitelistTable:new */
    export class ISWhitelistTable extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonBorderColor: any;

      columnSize: any;

      combo: any;

      currentPage: any;

      datas: any;

      entriesPerPages: any;

      entry: any;

      filtered: any;

      filters: any;

      fullPages: any;

      listHeaderColor: any;

      loading: any;

      nbrPerPageLbl: any;

      nbrPerPages: any;

      nextPage: any;

      pageLbl: any;

      pagePanel: any;

      pages: any;

      pagesLbl: any;

      prePage: any;

      schema: any;

      tableName: any;

      totalResult: any;

      constructor(x: any, y: any, width: any, height: any, tableName: any);

      clear(...__args: never[]): any;

      clearFilters(...__args: never[]): any;

      computeResult(datas: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      doPagesButtons(...__args: never[]): any;

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      onOptionPage(button: any, x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static getTableResult: (datas: any, rowId: any, tableName: any, ...__args: never[]) => any;

      /** @noSelf */
      static onFilterChange: (entry: any, combo: any, ...__args: never[]) => any;

      /** @noSelf */
      static onNbrPerPageChange: (entry: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISWhitelistTable {}
}
