/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorResizer:new */
    export class WorldMapEditorResizer extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      mapAPI: any;

      mapUI: any;

      originalBounds: any;

      resizing: any;

      snapMode: any;

      x1: any;

      x2: any;

      y1: any;

      y2: any;

      constructor(editor: any);

      cancelResize(...__args: never[]): any;

      endResizing(...__args: never[]): any;

      hitTest(x: any, y: any, ...__args: never[]): any;

      onMouseMove(mx: any, my: any, hitTest: any, ...__args: never[]): any;

      render(r: any, g: any, b: any, a: any, ...__args: never[]): any;

      setBounds(x1: any, y1: any, x2: any, y2: any, ...__args: never[]): any;

      snap(xy: any, ...__args: never[]): any;

      startResizing(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorResizer {}
}
