/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addMarker(square: any, radius: any, ...__args: never[]): any;

      drawTilesetList(y: any, item: any, alt: any, ...__args: never[]): any;

      onSelectNewSquare(...__args: never[]): any;

      onSquareSelected(square: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      removeMarker(...__args: never[]): any;
    }

    /** @customConstructor ISTilesPickerTilesList:new */
    export class ISTilesPickerTilesList extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      tileset: any;

      constructor(x: any, y: any, w: any, h: any);

      onMouseWheel(del: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.ISTilesPickerDebugUI {}
}
