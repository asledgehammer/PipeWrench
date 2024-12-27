/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISWidgetRecipesPanel:new */
    export class ISWidgetRecipesPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      activeTooltip: any;

      callbackTarget: any;

      logic: any;

      player: any;

      recipeFilterPanel: any;

      recipeFilterPanelRow: any;

      recipeIconPanel: any;

      recipeIconPanelRow: any;

      recipeListMode: any;

      recipeListPanel: any;

      recipeListPanelRow: any;

      recipeTable: any;

      starSetTexture: any;

      starUnsetTexture: any;

      tooltipCounter: any;

      tooltipCounterTime: any;

      tooltipLogic: any;

      tooltipRecipe: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        craftBench: any,
        isoObject: any,
        logic: any,
        callbackTarget: any,
      );

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createRecipeFilterPanel(_parentTable: any, ...__args: never[]): any;

      createRecipeIconPanel(_parentTable: any, ...__args: never[]): any;

      createRecipeListPanel(_parentTable: any, ...__args: never[]): any;

      deactivateTooltip(...__args: never[]): any;

      filterRecipeList(_category: any, ...__args: never[]): any;

      getActivePanel(...__args: never[]): any;

      getLogic(...__args: never[]): any;

      getPlayer(...__args: never[]): any;

      OnFilterAll(filter: any, ...__args: never[]): any;

      onRecipeChanged(_recipe: any, ...__args: never[]): any;

      onRecipeItemMouseHover(_item: any, ...__args: never[]): any;

      onRecipeListPanelScrolled(...__args: never[]): any;

      onResize(...__args: never[]): any;

      onUpdateRecipeList(_recipeList: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setRecipeListMode(_useListMode: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateContainers(_containers: any, ...__args: never[]): any;

      updateTooltip(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipesPanel {}
}
