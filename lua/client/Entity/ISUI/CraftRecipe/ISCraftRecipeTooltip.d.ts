/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISCraftRecipeTooltip:new */
    export class ISCraftRecipeTooltip extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      debugMode: any;

      dirtyLayout: any;

      followMouse: any;

      infoBox: any;

      ingredients: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      logic: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      player: any;

      playerNum: any;

      recipe: any;

      rootTable: any;

      titleOnly: any;

      titleOnlyAlpha: any;

      titleWidget: any;

      toolsWidget: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        recipe: any,
        logic: any,
        followMouse: any,
        debugMode: any,
      );

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createDynamicChildren(...__args: never[]): any;

      onResize(...__args: never[]): any;

      position(...__args: never[]): any;

      render(...__args: never[]): any;

      setRecipe(_recipe: any, _titleOnly: any, ...__args: never[]): any;

      setTitleOnly(_b: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      xuiRecalculateLayout(...__args: never[]): any;

      /** @noSelf */
      static activateToolTipFor: (
        _parent: any,
        _player: any,
        _recipe: any,
        _logic: any,
        _followMouse: any,
        _titleOnly: any,
        _debugMode: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static deactivateToolTipFor: (_parent: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISCraftRecipeTooltip {}
}
