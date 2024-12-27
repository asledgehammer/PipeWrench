/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISCraftRecipePanel:new */
    export class ISCraftRecipePanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      craftControl: any;

      inputs: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      logic: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      outputs: any;

      overlayPanel: any;

      player: any;

      rootTable: any;

      titleWidget: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        logic: any,
        recipeData: any,
        craftBench: any,
        isoObject: any,
      );

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createDynamicChildren(...__args: never[]): any;

      getRecipe(...__args: never[]): any;

      onInputsChanged(...__args: never[]): any;

      onRebuildItemNodes(_inputItems: any, ...__args: never[]): any;

      onRecipeChanged(...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      setOverlayVisible(_b: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateContainers(containers: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISCraftRecipePanel {}
}
