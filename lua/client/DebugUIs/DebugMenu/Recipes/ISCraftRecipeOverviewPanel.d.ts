/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Recipes {
    /** @customConstructor ISCraftRecipeOverviewPanel:new */
    export class ISCraftRecipeOverviewPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      entryBox: any;

      itemScriptPanel: any;

      list: any;

      listLabel: any;

      player: any;

      playerNum: any;

      searchText: any;

      selectedRecipeItem: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      createChildren(...__args: never[]): any;

      drawRecipeListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      incY(_y: any, _obj: any, _margin: any, ...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onRecipeListSelected(_item: any, ...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      populate(...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static onTextChange: (box: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeOverviewPanel {}
}
