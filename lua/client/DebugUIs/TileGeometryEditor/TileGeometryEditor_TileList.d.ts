/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.TileGeometryEditor {
    /** @customConstructor TileGeometryEditor_TileList:new */
    export class TileGeometryEditor_TileList extends lua.client.ISUI.ISPanel {
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

      onClearAssignedDepthTextures(...__args: never[]): any;

      onClearDepthOfSelectedTiles(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onRotate90Degrees(tileName: any, ...__args: never[]): any;

      onSelectAssignedDepthTexture(tileName: any, ...__args: never[]): any;

      onSelectInOtherList(tileName: any, ...__args: never[]): any;

      onShiftGeometry(selectedTile: any, dx: any, dy: any, ...__args: never[]): any;

      onShiftOnePixelRight(...__args: never[]): any;

      onSubtractSpriteGridPixels(tileName: any, ...__args: never[]): any;

      onSwapTilesets(tileName: any, ...__args: never[]): any;

      parseTileName(tileName: any, ...__args: never[]): any;

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
  export namespace lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_TileList {}
}
