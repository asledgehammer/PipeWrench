/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISWidgetInput:new */
    export class ISWidgetInput extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      amountWidth: any;

      amountWidth2: any;

      arrow: any;

      autoFillContents: any;

      colBad: any;

      colPartial: any;

      consumeScript: any;

      createScript: any;

      displayAsOutput: any;

      doToolTip: any;

      editedLabels: any;

      iconBorderSizeX: any;

      iconBorderSizeY: any;

      iconConsumed: any;

      iconMargin: any;

      iconReturned: any;

      iconSize: any;

      iconTool: any;

      inputScript: any;

      interactiveMode: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      labelIconSize: any;

      logic: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      normalBorderColor: any;

      player: any;

      primary: any;

      secondary: any;

      selectInputButtonBackgroundColor: any;

      selectInputButtonBackgroundColorMouseOver: any;

      selectInputButtonSize: any;

      selectInputButtonTextureColor: any;

      selectInputButtonTextureColorMouseOver: any;

      textColor: any;

      textureButtonBG: any;

      textureConsumed: any;

      textureCreate: any;

      textureMissingInput: any;

      textureReturned: any;

      textureSwapInput: any;

      textureTool: any;

      textureUsed: any;

      constructor(x: any, y: any, width: any, height: any, player: any, logic: any, inputScript: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createScriptValues(_script: any, isSecondary: any, ...__args: never[]): any;

      onRebuildItemNodes(_inputItems: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      onSelectInputsClicked(_button: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      updateScriptValues(_table: any, ...__args: never[]): any;

      updateValues(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISWidgetInput {}
}
