/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor StreamMapWindow:new */
    export class StreamMapWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      objectView: any;

      panning: any;

      renderPanel: any;

      xpos: any;

      ypos: any;

      zoom: any;

      constructor(x: any, y: any, width: any, height: any);

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      fillInfo: (() => any) | any;

      onMapMouseDown: ((x: any, y: any) => any) | any;

      onMapMouseMove: ((dx: any, dy: any) => any) | any;

      onMapRightMouseDown: ((x: any, y: any) => any) | any;

      onMapRightMouseUp: ((x: any, y: any) => any) | any;

      onMouseDoubleClickOpenObject: ((item: any) => any) | any;

      onRenderMouseWheel: ((del: any) => any) | any;

      renderTex: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.StreamMapWindow {}
}
