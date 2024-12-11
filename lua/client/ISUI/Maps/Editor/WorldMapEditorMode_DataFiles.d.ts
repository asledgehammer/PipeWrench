/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorMode_DataFiles:new */
    export class WorldMapEditorMode_DataFiles extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode {
      [id: string]: any;
      static [id: string]: any;

      fileNameEntry: any;

      listbox: any;

      selectedItem: any;

      constructor(editor: any);

      createChildren(...__args: never[]): any;

      onAddFile(...__args: never[]): any;

      onFileNameEntered(...__args: never[]): any;

      onListboxButton(action: any, arg1: any, ...__args: never[]): any;

      onMoveDown(...__args: never[]): any;

      onMoveUp(...__args: never[]): any;

      onRemoveFile(...__args: never[]): any;

      update(...__args: never[]): any;

      updateData(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode_DataFiles {}
}
