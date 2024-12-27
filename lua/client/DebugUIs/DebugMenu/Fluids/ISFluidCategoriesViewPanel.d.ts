/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Fluids {
    /** @customConstructor ISFluidCategoriesViewPanel:new */
    export class ISFluidCategoriesViewPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      entryBox: any;

      fluidList: any;

      list: any;

      listLabel: any;

      player: any;

      playerNum: any;

      searchText: any;

      selectedCategory: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      createChildren(...__args: never[]): any;

      drawCategoryListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      drawFluidListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      incY(_y: any, _obj: any, _margin: any, ...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onCategorySelected(_item: any, ...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      populate(...__args: never[]): any;

      populateFluids(...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static onTextChange: (box: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Fluids.ISFluidCategoriesViewPanel {}
}
