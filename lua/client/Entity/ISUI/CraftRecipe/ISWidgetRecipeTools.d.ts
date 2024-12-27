/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISWidgetRecipeTools:new */
    export class ISWidgetRecipeTools extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      colBad: any;

      colDisabled: any;

      colEnabled: any;

      colTextEnabled: any;

      doToolBorder: any;

      editMode: any;

      iconSize: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      left: any;

      logic: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      player: any;

      right: any;

      textureDrain: any;

      textureKeep: any;

      toolsLabel: any;

      constructor(x: any, y: any, width: any, height: any, player: any, logic: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createToolSide(_recipe: any, _doLeft: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      updateToolValues(_table: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipeTools {}
}
