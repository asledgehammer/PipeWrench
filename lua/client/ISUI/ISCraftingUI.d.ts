/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISCraftingUI:new */
    export class ISCraftingUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      addIngredientButton: any;

      allRecipesList: any;

      bottomInfoText1: any;

      bottomInfoText2: any;

      categories: any;

      catList: any;

      catListButtons: any;

      character: any;

      containerList: any;

      craftAllButton: any;

      craftInProgress: any;

      craftOneButton: any;

      debugGiveIngredientsButton: any;

      drawJoypadFocus: any;

      fgBar: any;

      ingredientListbox: any;

      ingredientPanel: any;

      ItemInstances: any;

      keysRichText: any;

      keysText: any;

      knownRecipes: any;

      LabelAddIngredient: any;

      LabelClose: any;

      LabelCraftAll: any;

      LabelCraftOne: any;

      LabelDash: any;

      LabelDashWidth: any;

      LabelFavorite: any;

      lineH: any;

      minimumHeight: any;

      minimumWidth: any;

      needRefreshIngredientPanel: any;

      noteRichText: any;

      panel: any;

      playerNum: any;

      PoisonTexture: any;

      recipeListHasFocus: any;

      recipesList: any;

      recipesListH: any;

      refreshTypesAvailableMS: any;

      selected: any;

      selectedIndex: any;

      selectedRecipeItem: any;

      taskLabel: any;

      totalRecipes: any;

      TreeExpanded: any;

      constructor(x: any, y: any, width: any, height: any, character: any);

      addItemInEvolvedRecipe(button: any, ...__args: never[]): any;

      craft(button: any, all: any, ...__args: never[]): any;

      craftAll(...__args: never[]): any;

      debugGiveIngredients(...__args: never[]): any;

      drawEvolvedIngredient(y: any, item: any, alt: any, ...__args: never[]): any;

      drawNonEvolvedIngredient(y: any, item: any, alt: any, ...__args: never[]): any;

      getAvailableItemsType(...__args: never[]): any;

      getContainers(...__args: never[]): any;

      getFavoriteModDataLocalString(recipe: any, ...__args: never[]): any;

      getFavoriteModDataString(recipe: any, ...__args: never[]): any;

      GetItemInstance(type: any, ...__args: never[]): any;

      getRecipeListBox(...__args: never[]): any;

      isExtraClothingItemOf(item1: any, item2: any, ...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      isWaterSource(item: any, count: any, ...__args: never[]): any;

      onActivateView(...__args: never[]): any;

      onAddIngredient(...__args: never[]): any;

      onAddRandomIngredient(button: any, ...__args: never[]): any;

      onCraftComplete(completedAction: any, recipe: any, container: any, containers: any, ...__args: never[]): any;

      onDblClickIngredientListbox(data: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDirDown(...__args: never[]): any;

      onJoypadDirLeft(...__args: never[]): any;

      onJoypadDirRight(...__args: never[]): any;

      onJoypadDirUp(...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      populateRecipesList(...__args: never[]): any;

      refresh(...__args: never[]): any;

      refreshIngredientList(...__args: never[]): any;

      refreshIngredientPanel(...__args: never[]): any;

      refreshTickBox(...__args: never[]): any;

      removeExtraClothingItemsFromList(index: any, item: any, itemList: any, ...__args: never[]): any;

      setVisible(bVisible: any, ...__args: never[]): any;

      sortList(...__args: never[]): any;

      transferItems(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static onPressKey: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static ReturnItemsToOriginalContainer: (playerObj: any, items: any, ...__args: never[]) => any;

      /** @noSelf */
      static sortByName: (a: any, b: any, ...__args: never[]) => any;

      /** @noSelf */
      static toggleCraftingUI: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISCraftingUI {}
}
