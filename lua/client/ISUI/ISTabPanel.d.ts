/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      activateView: ((viewName: any) => any) | any;

      addView: ((name: any, view: any) => any) | any;

      ensureVisible: ((index: any) => any) | any;

      getActiveView: (() => any) | any;

      getActiveViewIndex: (() => any) | any;

      getScrollButtonAtX: ((x: any) => any) | any;

      getTabIndexAtX: ((x: any, scrollX: any) => any) | any;

      getTabX: ((tabIndex: any, scrollX: any) => any) | any;

      getView: ((viewName: any) => any) | any;

      getWidthOfAllTabs: (() => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      removeView: ((view: any) => any) | any;

      render: (() => any) | any;

      setCenterTabs: ((center: any) => any) | any;

      setEqualTabWidth: ((equal: any) => any) | any;

      setOnTabTornOff: ((target: any, method: any) => any) | any;

      setTabsTransparency: ((alpha: any) => any) | any;

      setTextTransparency: ((alpha: any) => any) | any;

      updateSmoothScrolling: (() => any) | any;

      /** @noSelf */
      static redoTab: (self: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISTabPanel {}
}
