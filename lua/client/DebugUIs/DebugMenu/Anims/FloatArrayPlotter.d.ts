/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Anims {
    /** @customConstructor FloatArrayPlotter:new */
    export class FloatArrayPlotter extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      data: any;

      doGridLines: any;

      greyCol: any;

      gridColor: any;

      gridHorzSpacing: any;

      gridVertSpacing: any;

      horzBars: any;

      indexPointer: any;

      maxPlotPoints: any;

      plotColor: any;

      vertBars: any;

      constructor(x: any, y: any, width: any, height: any, maxPlotPoints: any);

      createChildren(...__args: never[]): any;

      render(...__args: never[]): any;

      setData(_data: any, ...__args: never[]): any;

      setHorzLine(value: any, col: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Anims.FloatArrayPlotter {}
}
