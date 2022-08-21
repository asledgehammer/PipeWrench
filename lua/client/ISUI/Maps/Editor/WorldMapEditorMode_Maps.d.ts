/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorMode_Maps:new */
    export class WorldMapEditorMode_Maps extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode {
      [id: string]: any;
      static [id: string]: any;

      listbox: any;

      constructor(editor: any);

      createChildren: (() => any) | any;

      fillList: (() => any) | any;

      onLoadMap: (() => any) | any;

      onMouseUpOutside: ((x: any, y: any) => any) | any;

      prerender: (() => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Maps {}
}
