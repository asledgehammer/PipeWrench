/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Base {
    /** @customConstructor ISDebugPanelBase:new */
    export class ISDebugPanelBase extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      buttonBorderColor: any;

      panelInfo: any;

      panels: any;

      panelTitle: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      createChildren: (() => any) | any;

      onClick: ((_button: any) => any) | any;

      onMadeActive: (() => any) | any;

      registerPanel: ((_buttonTitle: any, _panelClass: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: (_class: any, _x: any, _y: any, _w: any, _h: any, _title: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Base.ISDebugPanelBase {}
}
