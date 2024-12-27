/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISWidgetRecipeListPanel:new */
    export class ISWidgetRecipeListPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      callbackTarget: any;

      enabledShowAllFilter: any;

      logic: any;

      player: any;

      recipeListPanel: any;

      constructor(x: any, y: any, width: any, height: any, player: any, logic: any, callbackTarget: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      setDataList(_recipeList: any, ...__args: never[]): any;

      setInternalDimensions(_x: any, _y: any, _width: any, _height: any, ...__args: never[]): any;

      setSelectedData(_recipe: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipeListPanel {}
}
