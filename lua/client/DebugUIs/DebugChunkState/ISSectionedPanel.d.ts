/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugChunkState {
    /** @customConstructor ISSectionedPanel:new */
    export class ISSectionedPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      maintainHeight: any;

      sections: any;

      constructor(x: any, y: any, width: any, height: any);

      addSection: ((panel: any, title: any) => any) | any;

      clear: (() => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      render: (() => any) | any;
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

      calculateHeights: (() => any) | any;

      clear: (() => any) | any;

      createChildren: (() => any) | any;

      onHeaderClick: (() => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.ISSectionedPanel {}
}
