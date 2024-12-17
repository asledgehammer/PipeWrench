/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISCraftingCategoryUI:new */
    export class ISCraftingCategoryUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      craftingUI: any;

      favCheckedTex: any;

      favNotCheckedTex: any;

      favoriteStar: any;

      favPadX: any;

      favWidth: any;

      filterAll: any;

      filterEntry: any;

      filteringAll: any;

      filterLabel: any;

      lastText: any;

      recipes: any;

      selected: any;

      constructor(x: any, y: any, width: any, height: any, craftingUI: any);

      addToFavorite(fromKeyboard: any, ...__args: never[]): any;

      create(...__args: never[]): any;

      drawRecipesMap(y: any, item: any, alt: any, _drawBasic: any, ...__args: never[]): any;

      filter(...__args: never[]): any;

      getFavoriteX(...__args: never[]): any;

      isMouseOverFavorite(x: any, ...__args: never[]): any;

      onFilterAll(index: any, selected: any, ...__args: never[]): any;

      onMouseDoubleClick_Recipes(x: any, y: any, ...__args: never[]): any;

      onMouseDown_Recipes(x: any, y: any, ...__args: never[]): any;

      syncAllFilters(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISCraftingCategoryUI {}
}
