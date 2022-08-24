/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISScrollingListBox:new */
    export class ISScrollingListBox extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      altBgColor: any;

      columns: any;

      count: any;

      drawBorder: any;

      font: any;

      fontHgt: any;

      itemheight: any;

      itemheightoverride: any;

      itemPadY: any;

      items: any;

      javaObject: any;

      joypadFocused: any;

      listHeaderColor: any;

      listHeight: any;

      mouseoverselected: any;

      onmousedblclick: any;

      onmousedown: any;

      selected: any;

      selectedBeforeReset: any;

      smoothScrollTargetY: any;

      smoothScrollY: any;

      target: any;

      tooltipUI: any;

      constructor(x: any, y: any, width: any, height: any);

      addColumn: ((columnName: any, size: any) => any) | any;

      addItem: ((name: any, item: any) => any) | any;

      clear: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      insertItem: ((index: any, name: any, item: any) => any) | any;

      instantiate: (() => any) | any;

      isMouseOverScrollBar: (() => any) | any;

      nextVisibleItem: ((index: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onMouseDoubleClick: ((x: any, y: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      prevVisibleIndex: ((index: any) => any) | any;

      removeFirst: (() => any) | any;

      removeItem: ((itemText: any) => any) | any;

      removeItemByIndex: ((itemIndex: any) => any) | any;

      render: (() => any) | any;

      rowAt: ((x: any, y: any) => any) | any;

      scrollToSelected: (() => any) | any;

      setFont: ((font: any, padY: any) => any) | any;

      setJoypadFocused: ((focused: any, joypadData: any) => any) | any;

      setOnMouseDoubleClick: ((target: any, onmousedblclick: any) => any) | any;

      setOnMouseDownFunction: ((target: any, onmousedown: any) => any) | any;

      size: (() => any) | any;

      sort: (() => any) | any;

      topOfItem: ((index: any) => any) | any;

      updateSmoothScrolling: (() => any) | any;

      updateTooltip: (() => any) | any;

      /** @noSelf */
      static sortByName: (a: any, b: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISScrollingListBox {}
}
