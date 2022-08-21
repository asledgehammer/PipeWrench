/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorMode_DataFiles:new */
    export class WorldMapEditorMode_DataFiles extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode {
      [id: string]: any;
      static [id: string]: any;

      fileNameEntry: any;

      listbox: any;

      selectedItem: any;

      constructor(editor: any);

      createChildren: (() => any) | any;

      onAddFile: (() => any) | any;

      onFileNameEntered: (() => any) | any;

      onListboxButton: ((action: any, arg1: any) => any) | any;

      onMoveDown: (() => any) | any;

      onMoveUp: (() => any) | any;

      onRemoveFile: (() => any) | any;

      update: (() => any) | any;

      updateData: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode_DataFiles {}
}
