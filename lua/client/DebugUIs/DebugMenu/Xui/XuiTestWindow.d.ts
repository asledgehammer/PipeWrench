/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Xui {
    /** @customConstructor XuiTestWindow:new */
    export class XuiTestWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      buttonHello: any;

      heightMod: any;

      minimumHeight: any;

      minimumWidth: any;

      panelButton: any;

      player: any;

      th: any;

      xuiPanel: any;

      xuiScript: any;

      constructor(x: any, y: any, width: any, height: any, player: any, script: any);

      onButtonClick(_button: any, ...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Xui.XuiTestWindow {}
}
