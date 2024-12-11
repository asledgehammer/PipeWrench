/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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
        arg4: any,
      );

      addItem(text: any, data: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      getItemByIndex(index: any, ...__args: never[]): any;

      getListBox(...__args: never[]): any;

      getSelectedIndex(...__args: never[]): any;

      getSelectedItem(...__args: never[]): any;

      insertItem(index: any, text: any, data: any, ...__args: never[]): any;

      onAddItem(...__args: never[]): any;

      onMoveDown(...__args: never[]): any;

      onMoveUp(...__args: never[]): any;

      onRemoveItem(...__args: never[]): any;

      removeItemByIndex(index: any, ...__args: never[]): any;

      setSelectedIndex(index: any, ...__args: never[]): any;

      size(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorListBox {}
}
