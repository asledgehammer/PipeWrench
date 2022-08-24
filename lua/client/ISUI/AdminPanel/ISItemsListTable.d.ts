/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISItemsListTable:new */
    export class ISItemsListTable extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonAdd1: any;

      buttonAdd2: any;

      buttonAdd5: any;

      buttonAddMultiple: any;

      buttonBorderColor: any;

      datas: any;

      filters: any;

      filterWidgetMap: any;

      filterWidgets: any;

      listHeaderColor: any;

      totalResult: any;

      viewer: any;

      constructor(x: any, y: any, width: any, height: any, viewer: any);

      addItem: ((item: any) => any) | any;

      createChildren: (() => any) | any;

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      filterCategory: ((widget: any, scriptItem: any) => any) | any;

      filterDisplayCategory: ((widget: any, scriptItem: any) => any) | any;

      filterName: ((widget: any, scriptItem: any) => any) | any;

      filterType: ((widget: any, scriptItem: any) => any) | any;

      initList: ((module: any) => any) | any;

      onAddItem: ((button: any, item: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onOtherKey: ((key: any) => any) | any;

      render: (() => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static onFilterChange: (widget: any) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISItemsListTable {}
}
