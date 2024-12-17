/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISGroupBox:new */
    export class ISGroupBox extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      borderLabel: any;

      drawBorder: any;

      element: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      margin: any;

      marginBorder: any;

      minimumHeight: any;

      minimumWidth: any;

      styleLabel: any;

      textColor: any;

      title: any;

      constructor(x: any, y: any, width: any, height: any, _styleLabel: any);

      addChild(_element: any, ...__args: never[]): any;

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      setElement(_element: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISGroupBox {}
}
