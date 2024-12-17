/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISWidgetAutoToggle:new */
    export class ISWidgetAutoToggle extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      doToolTip: any;

      hover: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      onToggled: any;

      target: any;

      toggleState: any;

      constructor(x: any, y: any, width: any, height: any, doSmall: any, target: any, onToggled: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISWidgetAutoToggle {}
}
