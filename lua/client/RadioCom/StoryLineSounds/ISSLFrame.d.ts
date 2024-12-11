/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addGridData(_name: any, _col: any, _t: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      dataToGrid(_t: any, _i: any, ...__args: never[]): any;

      drawGridData(_x: any, _y: any, _t: any, ...__args: never[]): any;

      drawGridDataold(_x: any, _y: any, _t: any, ...__args: never[]): any;

      drawLinePoints(...__args: never[]): any;

      gridToData(_x: any, _y: any, ...__args: never[]): any;

      isDragging(...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      setStoryEvent(_event: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateGridRectangle(...__args: never[]): any;

      updateVisualGrid(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.StoryLineSounds.ISSLFrame {}
}
