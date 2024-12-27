/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISWidgetCraftDebug:new */
    export class ISWidgetCraftDebug extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      buttonDebug: any;

      callbackTarget: any;

      component: any;

      entity: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      originalButtonHeight: any;

      originalButtonWidth: any;

      player: any;

      styleButton: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        entity: any,
        component: any,
        callbackTarget: any,
        _styleButton: any,
      );

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      onStartDebug(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISWidgetCraftDebug {}
}
