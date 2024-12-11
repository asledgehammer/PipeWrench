/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugChunkState {
    /** @customConstructor ISSectionedPanel:new */
    export class ISSectionedPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      maintainHeight: any;

      sections: any;

      constructor(x: any, y: any, width: any, height: any);

      addSection(panel: any, title: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }

    /** @customConstructor ISSectionedPanel_Section:new */
    export class ISSectionedPanel_Section extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      enabled: any;

      expanded: any;

      headerButton: any;

      panel: any;

      panelHeight: any;

      title: any;

      constructor(x: any, y: any, width: any, height: any, panel: any, title: any);

      calculateHeights(...__args: never[]): any;

      clear(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onHeaderClick(...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.ISSectionedPanel {}
}
