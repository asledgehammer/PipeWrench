/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      createChildren(...__args: never[]): any;

      onClick(_button: any, ...__args: never[]): any;

      onMadeActive(...__args: never[]): any;

      registerPanel(_buttonTitle: any, _panelClass: any, _ignoreSorting: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (_class: any, _x: any, _y: any, _w: any, _h: any, _title: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Base.ISDebugPanelBase {}
}
