/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISTiledIconListBox:new */
    export class ISTiledIconListBox extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      callbackTarget: any;

      columns: any;

      columnWidth: any;

      currentPage: any;

      dataArrayList: any;

      iconHeight: any;

      iconWidth: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      lastMouseOverTile: any;

      margin: any;

      minimumColumns: any;

      minimumHeight: any;

      minimumRows: any;

      minimumWidth: any;

      mouseOverTile: any;

      onClickTile: any;

      onHoverTile: any;

      onRenderTile: any;

      pages: any;

      rowHeight: any;

      rows: any;

      selectedTileData: any;

      tileCount: any;

      tileHeight: any;

      tileMarginX: any;

      tileMarginY: any;

      tilePadX: any;

      tilePadY: any;

      tileWidth: any;

      constructor(x: any, y: any, width: any, height: any, dataList: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      calculateTiles(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      focusPageOnSelectedTile(...__args: never[]): any;

      getCurrentPage(...__args: never[]): any;

      getDataElement(_index: any, ...__args: never[]): any;

      getPages(...__args: never[]): any;

      getTileForCoordinate(_x: any, _y: any, ...__args: never[]): any;

      getTileIndexForCoordinate(_x: any, _y: any, ...__args: never[]): any;

      onMouseWheel(_del: any, ...__args: never[]): any;

      onPageScrolled(_newPage: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      pageChanged(...__args: never[]): any;

      render(...__args: never[]): any;

      renderTile(_tileData: any, _x: any, _y: any, _width: any, _height: any, _mouseover: any, ...__args: never[]): any;

      setCurrentPage(_page: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISTiledIconListBox {}
}
