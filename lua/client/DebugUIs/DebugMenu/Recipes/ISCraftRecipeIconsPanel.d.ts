/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Recipes {
    /** @customConstructor ISCraftRecipeIconsPanel:new */
    export class ISCraftRecipeIconsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      activeTooltip: any;

      iconPanel: any;

      player: any;

      playerNum: any;

      searchText: any;

      tooltipCounter: any;

      tooltipCounterTime: any;

      tooltipRecipe: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      createChildren(...__args: never[]): any;

      deactivateTooltip(...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      updateTooltip(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeIconsPanel {}
}
