/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      createChildren: (() => any) | any;

      onMouseUpOutside: ((x: any, y: any) => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      prerender: (() => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Annotations {}
}
