/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISCraftRecipeInfoBox:new */
    export class ISCraftRecipeInfoBox extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      displayTags: any;

      doToolTip: any;

      infoPairs: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      player: any;

      recipe: any;

      constructor(x: any, y: any, width: any, height: any, player: any, recipe: any);

      addInfo(_key: any, fullColor: any, ...__args: never[]): any;

      addInfoPair(_key: any, _value: any, _valueColor: any, fullColor: any, ...__args: never[]): any;

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createDynamicChildren(...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      setRecipe(_recipe: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISCraftRecipeInfoBox {}
}
