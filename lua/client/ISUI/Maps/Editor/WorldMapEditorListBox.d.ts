/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorListBox:new */
    export class WorldMapEditorListBox extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      arg1: any;

      arg2: any;

      arg3: any;

      arg4: any;

      buttonAdd: any;

      buttonMoveDown: any;

      buttonMoveUp: any;

      buttonRemove: any;

      callback: any;

      listbox: any;

      selectedItem: any;

      target: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        callback: any,
        target: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any
      );

      addItem: ((text: any, data: any) => any) | any;

      clear: (() => any) | any;

      createChildren: (() => any) | any;

      getItemByIndex: ((index: any) => any) | any;

      getListBox: (() => any) | any;

      getSelectedIndex: (() => any) | any;

      getSelectedItem: (() => any) | any;

      insertItem: ((index: any, text: any, data: any) => any) | any;

      onAddItem: (() => any) | any;

      onMoveDown: (() => any) | any;

      onMoveUp: (() => any) | any;

      onRemoveItem: (() => any) | any;

      removeItemByIndex: ((index: any) => any) | any;

      setSelectedIndex: ((index: any) => any) | any;

      size: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorListBox {}
}
