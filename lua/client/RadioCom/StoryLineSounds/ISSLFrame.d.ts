/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.StoryLineSounds {
    /** @customConstructor ISSLFrame:new */
    export class ISSLFrame extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      doGridLines: any;

      dragInside: any;

      eventData: any;

      fontheight: any;

      gridColor: any;

      gridData: any;

      gridHorzSpacing: any;

      gridPadding: any;

      gridRectangle: any;

      gridVertSpacing: any;

      storyEvent: any;

      visualGrid: any;

      constructor(x: any, y: any, width: any, height: any);

      addGridData: ((_name: any, _col: any, _t: any) => any) | any;

      createChildren: (() => any) | any;

      dataToGrid: ((_t: any, _i: any) => any) | any;

      drawGridData: ((_x: any, _y: any, _t: any) => any) | any;

      drawGridDataold: ((_x: any, _y: any, _t: any) => any) | any;

      drawLinePoints: (() => any) | any;

      gridToData: ((_x: any, _y: any) => any) | any;

      isDragging: (() => any) | any;

      onResize: (() => any) | any;

      render: (() => any) | any;

      setStoryEvent: ((_event: any) => any) | any;

      update: (() => any) | any;

      updateGridRectangle: (() => any) | any;

      updateVisualGrid: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.StoryLineSounds.ISSLFrame {}
}
