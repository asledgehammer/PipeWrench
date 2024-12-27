/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISXuiTableLayout:new */
    export class ISXuiTableLayout extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      backgroundColor: any;

      borderColor: any;

      cells: any;

      columns: any;

      dirtyLayout: any;

      drawBackground: any;

      drawBorder: any;

      drawGrid: any;

      gridColor: any;

      rows: any;

      constructor(x: any, y: any, width: any, height: any, columns: any, rows: any);

      addElement(_column: any, _row: any, _element: any, ...__args: never[]): any;

      calculateLayout(...__args: never[]): any;

      cell(_column: any, _row: any, ...__args: never[]): any;

      cellCount(...__args: never[]): any;

      cellGetFirst(_column: any, _row: any, ...__args: never[]): any;

      column(_index: any, ...__args: never[]): any;

      columnCount(...__args: never[]): any;

      ensureCell(_column: any, _row: any, ...__args: never[]): any;

      isValidPos(_column: any, _row: any, ...__args: never[]): any;

      row(_index: any, ...__args: never[]): any;

      rowCount(...__args: never[]): any;
    }

    /** @customConstructor ISXuiTableLayoutCell:new */
    export class ISXuiTableLayoutCell extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      backgroundColor: any;

      borderColor: any;

      children: any;

      columnIndex: any;

      drawBackground: any;

      drawBorder: any;

      height: any;

      parent: any;

      rowIndex: any;

      width: any;

      x: any;

      y: any;

      constructor(_columnIndex: any, _rowIndex: any, _parent: any);

      addChild(_child: any, ...__args: never[]): any;

      getAbsoluteX(...__args: never[]): any;

      getAbsoluteY(...__args: never[]): any;

      getHeight(...__args: never[]): any;

      getWidth(...__args: never[]): any;

      getX(...__args: never[]): any;

      getY(...__args: never[]): any;

      setRectangle(_x: any, _y: any, _w: any, _h: any, ...__args: never[]): any;
    }

    /** @customConstructor ISXuiTableLayoutColumn:new */
    export class ISXuiTableLayoutColumn extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      backgroundColor: any;

      borderColor: any;

      columnIndex: any;

      configWidth: any;

      isPercent: any;

      minimumWidth: any;

      temp: any;

      width: any;

      x: any;

      constructor(_columnIndex: any, _width: any, _isPercent: any);
    }

    /** @customConstructor ISXuiTableLayoutRow:new */
    export class ISXuiTableLayoutRow extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      backgroundColor: any;

      borderColor: any;

      configHeight: any;

      height: any;

      isPercent: any;

      minimumHeight: any;

      rowIndex: any;

      temp: any;

      y: any;

      constructor(_rowIndex: any, _height: any, _isPercent: any);
    }
  }
  export namespace lua.client.ISUI.ISXuiTableLayout {}
}
