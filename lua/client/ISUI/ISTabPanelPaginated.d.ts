/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISTabPanelPaginated:new */
    export class ISTabPanelPaginated extends lua.client.ISUI.ISTabPanel {
      [id: string]: any;
      static [id: string]: any;

      backwardView: any;

      forwardView: any;

      mouseDownHook: any;

      pagesCount: any;

      shownViews: any;

      tooMuchViews: any;

      constructor(x: any, y: any, width: any, height: any, pagesCount: any);

      addForwardBackwardViews(...__args: never[]): any;

      getPagesCount(...__args: never[]): any;

      getViewByIndex(index: any, ...__args: never[]): any;

      renderView(viewObject: any, tabDragSelected: any, _x: any, tabWidth: any, gap: any, ...__args: never[]): any;

      setPagesCount(pagesCount: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISTabPanelPaginated {}
}
