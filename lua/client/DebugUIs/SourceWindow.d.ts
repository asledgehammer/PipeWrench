/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      doDrawItem(y: any, item: any, ...__args: never[]): any;

      fill(...__args: never[]): any;

      onMouseDoubleClickBreakpointToggle(item: any, ...__args: never[]): any;

      onSourceMouseWheel(del: any, ...__args: never[]): any;

      reloadFile(...__args: never[]): any;

      renderSrc(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.SourceWindow {}
}
