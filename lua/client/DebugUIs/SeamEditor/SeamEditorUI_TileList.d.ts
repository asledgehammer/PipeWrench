/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.SeamEditor {
    /** @customConstructor SeamEditorUI_TileList:new */
    export class SeamEditorUI_TileList extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      picker: any;

      selection: any;

      tileset: any;

      constructor(x: any, y: any, width: any, height: any, picker: any);

      calculateSelectionBounds(...__args: never[]): any;

      getColRowAt(x: any, y: any, ...__args: never[]): any;

      getFirstSelectedTile(...__args: never[]): any;

      getSelection(...__args: never[]): any;

      getSingleSelectedTile(...__args: never[]): any;

      isSelectionEmpty(...__args: never[]): any;

      isValidColRow(col: any, row: any, ...__args: never[]): any;

      onClearMaster(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      onSelectInOtherList(tileName: any, ...__args: never[]): any;

      onSelectMaster(tileName: any, ...__args: never[]): any;

      onSwapTilesets(tileName: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      renderGrid(xIndent: any, yIndent: any, texW: any, texH: any, ...__args: never[]): any;

      selectionAdd(col: any, row: any, ...__args: never[]): any;

      selectionClear(...__args: never[]): any;

      selectionIndexOf(col: any, row: any, ...__args: never[]): any;

      selectionRemove(col: any, row: any, ...__args: never[]): any;

      selectionToggle(col: any, row: any, ...__args: never[]): any;

      setTileset(tilesetName: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.SeamEditor.SeamEditorUI_TileList {}
}
