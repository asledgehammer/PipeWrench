/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      clear: (() => any) | any;

      clearFilters: (() => any) | any;

      computeResult: ((datas: any) => any) | any;

      createChildren: (() => any) | any;

      doPagesButtons: (() => any) | any;

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      onOptionPage: ((button: any, x: any, y: any) => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static getTableResult: (datas: any, rowId: any, tableName: any) => any;

      /** @noSelf */
      static onFilterChange: (entry: any, combo: any) => any;

      /** @noSelf */
      static onNbrPerPageChange: (entry: any) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISWhitelistTable {}
}
