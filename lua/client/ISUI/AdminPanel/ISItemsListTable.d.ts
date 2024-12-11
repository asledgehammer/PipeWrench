/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addItem(item: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      filterCategory(widget: any, scriptItem: any, ...__args: never[]): any;

      filterDisplayCategory(widget: any, scriptItem: any, ...__args: never[]): any;

      filterName(widget: any, scriptItem: any, ...__args: never[]): any;

      filterType(widget: any, scriptItem: any, ...__args: never[]): any;

      initList(module: any, ...__args: never[]): any;

      onAddItem(button: any, item: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onOtherKey(key: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static onFilterChange: (widget: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISItemsListTable {}
}
