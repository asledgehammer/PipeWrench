/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorResizer:new */
    export class WorldMapEditorResizer extends lua.shared.ISBaseObject {
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

      cancelResize: (() => any) | any;

      endResizing: (() => any) | any;

      hitTest: ((x: any, y: any) => any) | any;

      onMouseMove: ((mx: any, my: any, hitTest: any) => any) | any;

      render: (() => any) | any;

      setBounds: ((x1: any, y1: any, x2: any, y2: any) => any) | any;

      snap: ((xy: any) => any) | any;

      startResizing: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorResizer {}
}
