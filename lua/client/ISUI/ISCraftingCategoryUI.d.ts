/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addToFavorite: ((fromKeyboard: any) => any) | any;

      create: (() => any) | any;

      drawRecipesMap: ((y: any, item: any, alt: any) => any) | any;

      filter: (() => any) | any;

      getFavoriteX: (() => any) | any;

      isMouseOverFavorite: ((x: any) => any) | any;

      onFilterAll: ((index: any, selected: any) => any) | any;

      onMouseDoubleClick_Recipes: ((x: any, y: any) => any) | any;

      onMouseDown_Recipes: ((x: any, y: any) => any) | any;

      syncAllFilters: (() => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISCraftingCategoryUI {}
}
