/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISWidgetTooltipOutput:new */
    export class ISWidgetTooltipOutput extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      amountWidth: any;

      amountWidth2: any;

      arrow: any;

      autoFillContents: any;

      colBad: any;

      colPartial: any;

      createScript: any;

      doToolTip: any;

      iconSize: any;

      interactiveMode: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      logic: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      outputScript: any;

      player: any;

      primary: any;

      secondary: any;

      textColor: any;

      textureConsume: any;

      textureCreate: any;

      textureDrain: any;

      textureFluid: any;

      textureKeep: any;

      constructor(x: any, y: any, width: any, height: any, player: any, logic: any, outputScript: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createScriptValues(_script: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      updateScriptValues(_table: any, ...__args: never[]): any;

      updateValues(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISWidgetTooltipOutput {}
}
