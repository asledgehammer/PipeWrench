/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISWidgetComponentHeader:new */
    export class ISWidgetComponentHeader extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      component: any;

      componentUiStyle: any;

      enableIcon: any;

      entity: any;

      icon: any;

      iconSize: any;

      margin: any;

      padding: any;

      player: any;

      styleIcon: any;

      styleLabel: any;

      textureBackground: any;

      title: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        entity: any,
        component: any,
        componentUiStyle: any,
        _styleIcon: any,
        _styleLabel: any,
      );

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISWidgetComponentHeader {}
}
