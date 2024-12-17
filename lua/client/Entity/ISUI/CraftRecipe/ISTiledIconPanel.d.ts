/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISTiledIconPanel:new */
    export class ISTiledIconPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      buttonNext: any;

      buttonPrev: any;

      callbackTarget: any;

      dataList: any;

      enableSearchBox: any;

      entryBox: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      pagesLabel: any;

      player: any;

      searchHackLabel: any;

      searchInfoText: any;

      searchText: any;

      sourceDataList: any;

      tiledIconListBox: any;

      constructor(x: any, y: any, width: any, height: any, player: any, dataList: any, callbackTarget: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      filterData(_string: any, ...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onFilterData(_string: any, _dataList: any, _sourceDataList: any, ...__args: never[]): any;

      onPageChanged(...__args: never[]): any;

      onPageScrolled(_newPage: any, ...__args: never[]): any;

      onRenderTile(
        _tileData: any,
        _x: any,
        _y: any,
        _width: any,
        _height: any,
        _mouseover: any,
        ...__args: never[]
      ): any;

      onResize(...__args: never[]): any;

      onTileClicked(
        _tileData: any,
        _x: any,
        _y: any,
        _width: any,
        _height: any,
        _mouseover: any,
        ...__args: never[]
      ): any;

      onTileMouseHover(_tileData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setDataList(_dataList: any, ...__args: never[]): any;

      setSearchInfoText(_text: any, ...__args: never[]): any;

      setSelectedData(_data: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static onTextChange: (box: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISTiledIconPanel {}
}
