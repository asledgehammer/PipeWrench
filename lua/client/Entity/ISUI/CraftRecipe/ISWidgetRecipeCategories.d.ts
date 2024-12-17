/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISWidgetRecipeCategories:new */
    export class ISWidgetRecipeCategories extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      isInitialised: any;

      recipeCategoryPanel: any;

      selectedCategory: any;

      constructor(x: any, y: any, width: any, height: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onCategoryChanged(_item: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      populateCategoryList(...__args: never[]): any;

      render(...__args: never[]): any;

      setInternalHeight(_height: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipeCategories {}
}
