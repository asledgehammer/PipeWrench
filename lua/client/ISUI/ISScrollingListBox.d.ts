/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      stopPrerender: any;

      target: any;

      tooltipUI: any;

      constructor(x: any, y: any, width: any, height: any);

      addColumn(columnName: any, size: any, ...__args: never[]): any;

      addItem(name: any, item: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      insertItem(index: any, name: any, item: any, ...__args: never[]): any;

      instantiate(...__args: never[]): any;

      isMouseOverScrollBar(...__args: never[]): any;

      nextVisibleItem(index: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onMouseDoubleClick(x: any, y: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      prevVisibleIndex(index: any, ...__args: never[]): any;

      removeFirst(...__args: never[]): any;

      removeItem(itemText: any, ...__args: never[]): any;

      removeItemByIndex(itemIndex: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      rowAt(x: any, y: any, ...__args: never[]): any;

      scrollToSelected(...__args: never[]): any;

      setFont(font: any, padY: any, ...__args: never[]): any;

      setJoypadFocused(focused: any, joypadData: any, ...__args: never[]): any;

      setOnMouseDoubleClick(target: any, onmousedblclick: any, ...__args: never[]): any;

      setOnMouseDownFunction(target: any, onmousedown: any, ...__args: never[]): any;

      size(...__args: never[]): any;

      sort(...__args: never[]): any;

      topOfItem(index: any, ...__args: never[]): any;

      updateSmoothScrolling(...__args: never[]): any;

      updateTooltip(...__args: never[]): any;

      /** @noSelf */
      static sortByName: (a: any, b: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISScrollingListBox {}
}
