/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Xui {
    /** @customConstructor XuiDebugLayoutWindow:new */
    export class XuiDebugLayoutWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      colMod: any;

      dAplha: any;

      heightMod: any;

      minimumHeight: any;

      minimumWidth: any;

      player: any;

      rh: any;

      selectColor: any;

      selectedUUID: any;

      selections: any;

      th: any;

      toggle: any;

      xuiPanel: any;

      xuiScript: any;

      constructor(x: any, y: any, width: any, height: any, player: any, script: any);

      debugXuiFindAllUUID(_self: any, _uuid: any, _list: any, ...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      selectUUID(_uuid: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Xui.XuiDebugLayoutWindow {}
}
