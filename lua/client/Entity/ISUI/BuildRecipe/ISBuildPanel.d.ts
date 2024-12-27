/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.BuildRecipe {
    /** @customConstructor ISBuildPanel:new */
    export class ISBuildPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      _filterString: any;

      buildEntity: any;

      categoryColumn: any;

      craftBench: any;

      craftRecipePanel: any;

      drawDebugLines: any;

      inventoryPanel: any;

      inventoryPanelColumn: any;

      isoObject: any;

      leftHandedMode: any;

      logic: any;

      minimumHeight: any;

      minimumWidth: any;

      player: any;

      playerLastSquare: any;

      recipeCategories: any;

      recipeColumn: any;

      recipeListMode: any;

      recipeQuery: any;

      recipesPanel: any;

      rootTable: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        craftBench: any,
        isoObject: any,
        recipeQuery: any,
      );

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createBuildIsoEntity(dontSetDrag: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createInventoryPanel(...__args: never[]): any;

      createRecipeCategoryColumn(...__args: never[]): any;

      createRecipePanel(...__args: never[]): any;

      createRecipesColumn(...__args: never[]): any;

      filterRecipeList(_category: any, ...__args: never[]): any;

      getCategoryList(...__args: never[]): any;

      getSelectedRecipe(...__args: never[]): any;

      hasPlayerMoved(...__args: never[]): any;

      onCategoryChanged(_category: any, ...__args: never[]): any;

      onRecipeChanged(_recipe: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      onShowManualSelectChanged(_showManualSelectInputs: any, ...__args: never[]): any;

      onStopCraft(...__args: never[]): any;

      onUpdateContainers(...__args: never[]): any;

      onUpdateRecipeList(_recipeList: any, ...__args: never[]): any;

      refreshList(...__args: never[]): any;

      render(...__args: never[]): any;

      setRecipeFilter(_filterString: any, ...__args: never[]): any;

      setRecipeList(_recipeList: any, ...__args: never[]): any;

      setRecipeListMode(_useListMode: any, ...__args: never[]): any;

      setRecipes(_recipeQuery: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateContainers(...__args: never[]): any;

      /** @noSelf */
      static SetDragItem: (item: any, playerNum: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Entity.ISUI.BuildRecipe.ISBuildPanel {}
}
