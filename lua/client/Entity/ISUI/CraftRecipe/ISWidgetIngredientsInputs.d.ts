/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISWidgetIngredientsInputs:new */
    export class ISWidgetIngredientsInputs extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      doToolTip: any;

      inputs: any;

      inputsLabel: any;

      interactiveMode: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      itemMargin: any;

      itemNameMaxLines: any;

      itemSpacing: any;

      logic: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      player: any;

      textureLink: any;

      constructor(x: any, y: any, width: any, height: any, player: any, logic: any);

      addInput(_inputScript: any, ...__args: never[]): any;

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onRebuildItemNodes(_inputItems: any, ...__args: never[]): any;

      onRecipeChanged(...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISWidgetIngredientsInputs {}
}
