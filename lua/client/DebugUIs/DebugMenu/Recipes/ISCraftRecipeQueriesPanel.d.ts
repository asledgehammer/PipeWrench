/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Recipes {
    /** @customConstructor ISCraftRecipeQueriesPanel:new */
    export class ISCraftRecipeQueriesPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      activeTooltip: any;

      BTN_WIDTH: any;

      BTN_XOFFSET: any;

      entryBox: any;

      list: any;

      listLabel: any;

      player: any;

      playerNum: any;

      queryBox: any;

      queryLabel: any;

      recipeList: any;

      searchText: any;

      selectedQuery: any;

      testQueryButton: any;

      tooltipCounter: any;

      tooltipRecipe: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      createChildren(...__args: never[]): any;

      deactivateTooltip(...__args: never[]): any;

      drawQueryListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      drawRecipeListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      incY(_y: any, _obj: any, _margin: any, ...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onQuerySelected(_item: any, ...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      populate(_noAutoSelect: any, ...__args: never[]): any;

      populateRecipes(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      updateTooltip(...__args: never[]): any;

      /** @noSelf */
      static onTextChange: (box: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeQueriesPanel {}
}
