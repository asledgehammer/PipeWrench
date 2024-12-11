/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISTabPanel:new */
    export class ISTabPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static fromOutside: any;

      static mouseOut: any;

      static viewDraggin: any;

      static viewDragging: any;

      static xMouse: any;

      static yMouse: any;

      activeView: any;

      allowDraggingTabs: any;

      allowTornOffTabs: any;

      blinkTabAlpha: any;

      blinkTabAlphaIncrease: any;

      blinkTabs: any;

      centerTabs: any;

      draggingTab: any;

      equalTabWidth: any;

      isDragging: any;

      maxLength: any;

      scrollX: any;

      smoothScrollTargetX: any;

      smoothScrollX: any;

      tabHeight: any;

      tabPadX: any;

      tabTornOff: any;

      tabTornOffTarget: any;

      tabTransparency: any;

      textTransparency: any;

      viewList: any;

      constructor(x: any, y: any, width: any, height: any);

      activateView(viewName: any, ...__args: never[]): any;

      addView(name: any, view: any, ...__args: never[]): any;

      ensureVisible(index: any, ...__args: never[]): any;

      getActiveView(...__args: never[]): any;

      getActiveViewIndex(...__args: never[]): any;

      getScrollButtonAtX(x: any, ...__args: never[]): any;

      getTabIndexAtX(x: any, scrollX: any, ...__args: never[]): any;

      getTabX(tabIndex: any, scrollX: any, ...__args: never[]): any;

      getView(viewName: any, ...__args: never[]): any;

      getWidthOfAllTabs(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      removeView(view: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setCenterTabs(center: any, ...__args: never[]): any;

      setEqualTabWidth(equal: any, ...__args: never[]): any;

      setOnTabTornOff(target: any, method: any, ...__args: never[]): any;

      setTabsTransparency(alpha: any, ...__args: never[]): any;

      setTextTransparency(alpha: any, ...__args: never[]): any;

      updateSmoothScrolling(...__args: never[]): any;

      /** @noSelf */
      static redoTab: (self: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISTabPanel {}
}
