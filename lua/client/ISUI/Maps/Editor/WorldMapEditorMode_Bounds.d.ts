/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorMode_Bounds:new */
    export class WorldMapEditorMode_Bounds extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode {
      [id: string]: any;
      static [id: string]: any;

      labelBounds: any;

      mode: any;

      resizeMode: any;

      resizer: any;

      snapButtons: any;

      snapMode: any;

      constructor(editor: any);

      cancelResize: (() => any) | any;

      createChildren: (() => any) | any;

      onChangeSnapMode: ((button: any) => any) | any;

      onDrawBounds: (() => any) | any;

      onMouseUpOutside: ((x: any, y: any) => any) | any;

      onReset: (() => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      render: (() => any) | any;

      setBounds: ((x1: any, y1: any, x2: any, y2: any) => any) | any;

      snap: ((xy: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Bounds {}
}
