/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorMode_Annotations:new */
    export class WorldMapEditorMode_Annotations extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      dragMoved: any;

      dragStartX: any;

      dragStartY: any;

      symbolsUI: any;

      constructor(editor: any);

      createChildren(...__args: never[]): any;

      onMouseUpOutside(x: any, y: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      prerender(...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Annotations {}
}
