/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor SourceWindow:new */
    export class SourceWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      filename: any;

      keepOnScreen: any;

      reloadBtn: any;

      sourceView: any;

      constructor(x: any, y: any, width: any, height: any, filename: any);

      doDrawItem: ((y: any, item: any) => any) | any;

      fill: (() => any) | any;

      onMouseDoubleClickBreakpointToggle: ((item: any) => any) | any;

      onSourceMouseWheel: ((del: any) => any) | any;

      reloadFile: (() => any) | any;

      renderSrc: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.SourceWindow {}
}
