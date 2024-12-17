/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISTableLayout:new */
    export class ISTableLayout extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      cells: any;

      columns: any;

      drawGrid: any;

      gridColor: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      minimumHeight: any;

      minimumWidth: any;

      rows: any;

      styleCell: any;

      styleColumn: any;

      styleRow: any;

      constructor(x: any, y: any, width: any, height: any, _styleColumn: any, _styleRow: any, _styleCell: any);

      addChild(_element: any, ...__args: never[]): any;

      addColumn(_styleColumn: any, _autoFill: any, ...__args: never[]): any;

      addColumnFill(_styleColumn: any, ...__args: never[]): any;

      addRow(_styleRow: any, _autoFill: any, ...__args: never[]): any;

      addRowFill(_styleRow: any, ...__args: never[]): any;

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      cell(_column: any, _row: any, ...__args: never[]): any;

      cellCount(...__args: never[]): any;

      cellFor(_element: any, ...__args: never[]): any;

      cellGetFirst(_column: any, _row: any, ...__args: never[]): any;

      clearTable(...__args: never[]): any;

      column(_index: any, ...__args: never[]): any;

      columnCount(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createTable(columns: any, rows: any, ...__args: never[]): any;

      ensureCells(...__args: never[]): any;

      isValidPos(_column: any, _row: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      row(_index: any, ...__args: never[]): any;

      rowCount(...__args: never[]): any;

      setElement(_column: any, _row: any, _element: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }

    /** @customConstructor ISTableLayoutCell:new */
    export class ISTableLayoutCell extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      backgroundColor: any;

      borderColor: any;

      columnIndex: any;

      drawBackground: any;

      drawBorder: any;

      element: any;

      height: any;

      minimumHeight: any;

      minimumWidth: any;

      padding: any;

      parent: any;

      rowIndex: any;

      visible: any;

      width: any;

      x: any;

      y: any;

      constructor(_columnIndex: any, _rowIndex: any, _parent: any);

      addChild(_child: any, ...__args: never[]): any;

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      getAbsoluteX(...__args: never[]): any;

      getAbsoluteY(...__args: never[]): any;

      getHeight(...__args: never[]): any;

      getWidth(...__args: never[]): any;

      getX(...__args: never[]): any;

      getY(...__args: never[]): any;

      setVisible(_b: any, ...__args: never[]): any;

      setX(_x: any, ...__args: never[]): any;

      setY(_y: any, ...__args: never[]): any;
    }

    /** @customConstructor ISTableLayoutColumn:new */
    export class ISTableLayoutColumn extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      backgroundColor: any;

      borderColor: any;

      columnIndex: any;

      isAutoFill: any;

      minimumWidth: any;

      parentTable: any;

      temp: any;

      visible: any;

      width: any;

      x: any;

      constructor(_parentTable: any, _columnIndex: any, _isAutoFill: any);

      index(...__args: never[]): any;

      setVisible(_b: any, _silent: any, ...__args: never[]): any;
    }

    /** @customConstructor ISTableLayoutRow:new */
    export class ISTableLayoutRow extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      backgroundColor: any;

      borderColor: any;

      height: any;

      isAutoFill: any;

      minimumHeight: any;

      parentTable: any;

      rowIndex: any;

      temp: any;

      visible: any;

      y: any;

      constructor(_parentTable: any, _rowIndex: any, _isAutoFill: any);

      index(...__args: never[]): any;

      setVisible(_b: any, _silent: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISTableLayout {}
}
