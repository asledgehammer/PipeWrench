/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Base {
    /** @customConstructor ISDebugSubPanelBase:new */
    export class ISDebugSubPanelBase extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonBorderColor: any;

      doStencilRender: any;

      variableColor: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      initHorzBars: ((_x: any, _width: any) => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {}
}
