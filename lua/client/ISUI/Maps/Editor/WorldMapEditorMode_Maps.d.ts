/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorMode_Maps:new */
    export class WorldMapEditorMode_Maps extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode {
      [id: string]: any;
      static [id: string]: any;

      listbox: any;

      constructor(editor: any);

      createChildren(...__args: never[]): any;

      fillList(...__args: never[]): any;

      onLoadMap(...__args: never[]): any;

      onMouseUpOutside(x: any, y: any, ...__args: never[]): any;

      prerender(...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Maps {}
}
