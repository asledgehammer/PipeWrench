/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      createChildren: (() => any) | any;

      render: (() => any) | any;

      setData: ((_data: any) => any) | any;

      setHorzLine: ((value: any, col: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Anims.FloatArrayPlotter {}
}
