/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISTilesPickerDebugUI:new */
    export class ISTilesPickerDebugUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      arrow: any;

      chr: any;

      cursor: any;

      filesList: any;

      marker: any;

      moveWithMouse: any;

      playerNum: any;

      selectX: any;

      selectY: any;

      selectZ: any;

      tilesList: any;

      constructor(x: any, y: any, character: any, square: any);

      addMarker: ((square: any, radius: any) => any) | any;

      drawTilesetList: ((y: any, item: any, alt: any) => any) | any;

      onSelectNewSquare: (() => any) | any;

      onSquareSelected: ((square: any) => any) | any;

      populateList: (() => any) | any;

      removeMarker: (() => any) | any;
    }

    /** @customConstructor ISTilesPickerTilesList:new */
    export class ISTilesPickerTilesList extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      tileset: any;

      constructor(x: any, y: any, w: any, h: any);

      onMouseWheel: ((del: any) => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.ISTilesPickerDebugUI {}
}
