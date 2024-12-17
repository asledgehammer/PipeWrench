/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Recipes {
    /** @customConstructor ISCraftRecipeTagsPanel:new */
    export class ISCraftRecipeTagsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      activeTooltip: any;

      entryBox: any;

      list: any;

      listLabel: any;

      player: any;

      playerNum: any;

      recipeList: any;

      searchText: any;

      selectedTag: any;

      tooltipCounter: any;

      tooltipRecipe: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      createChildren(...__args: never[]): any;

      deactivateTooltip(...__args: never[]): any;

      drawRecipeListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      drawTagListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      incY(_y: any, _obj: any, _margin: any, ...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      onTagSelected(_item: any, ...__args: never[]): any;

      populate(...__args: never[]): any;

      populateRecipes(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      updateTooltip(...__args: never[]): any;

      /** @noSelf */
      static onTextChange: (box: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeTagsPanel {}
}
