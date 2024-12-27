/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISWidgetCraftProgress:new */
    export class ISWidgetCraftProgress extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      callbackTarget: any;

      entity: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      originalBarHeight: any;

      originalBarWidth: any;

      player: any;

      progressBar: any;

      styleBar: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        entity: any,
        callbackTarget: any,
        _styleBar: any,
      );

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onGetProgress(...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISWidgetCraftProgress {}
}
