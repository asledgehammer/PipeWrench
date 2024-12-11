/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      cancelResize(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onChangeSnapMode(button: any, ...__args: never[]): any;

      onDrawBounds(...__args: never[]): any;

      onMouseUpOutside(x: any, y: any, ...__args: never[]): any;

      onReset(...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setBounds(x1: any, y1: any, x2: any, y2: any, ...__args: never[]): any;

      snap(xy: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Bounds {}
}
