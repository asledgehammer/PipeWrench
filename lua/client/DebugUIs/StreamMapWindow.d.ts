/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor StreamMapWindow:new */
    export class StreamMapWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      level: any;

      objectView: any;

      panning: any;

      renderPanel: any;

      xpos: any;

      ypos: any;

      zoom: any;

      constructor(x: any, y: any, width: any, height: any);

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      fillInfo(...__args: never[]): any;

      onMapMouseDown(x: any, y: any, ...__args: never[]): any;

      onMapMouseMove(dx: any, dy: any, ...__args: never[]): any;

      onMapRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onMapRightMouseUp(x: any, y: any, ...__args: never[]): any;

      onMouseDoubleClickOpenObject(item: any, ...__args: never[]): any;

      onRenderMouseWheel(del: any, ...__args: never[]): any;

      renderTex(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.StreamMapWindow {}
}
