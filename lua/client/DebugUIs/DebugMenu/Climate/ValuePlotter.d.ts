/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor ValuePlotter:new */
    export class ValuePlotter extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      doGridLines: any;

      greyCol: any;

      gridColor: any;

      gridHorzSpacing: any;

      gridVertSpacing: any;

      his: any;

      horzBars: any;

      indexPointer: any;

      maxPlotPoints: any;

      vars: any;

      vertBars: any;

      constructor(x: any, y: any, width: any, height: any, maxPlotPoints: any);

      addPlotPoint: ((dataset: any, vertbarCol: any) => any) | any;

      applyMinMax: ((_minmax: any, indexLine: any) => any) | any;

      calcMinMax: ((indexLine: any, minmax: any) => any) | any;

      clearHistory: (() => any) | any;

      createChildren: (() => any) | any;

      defineVariable: ((name: any, color: any, minVal: any, maxVal: any) => any) | any;

      getDataSet: (() => any) | any;

      getVarCount: (() => any) | any;

      getVars: (() => any) | any;

      render: (() => any) | any;

      setHorzLine: ((value: any, col: any) => any) | any;

      setVariableEnabled: ((_name: any, _bool: any) => any) | any;

      unsetHorzLine: ((idx: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.ValuePlotter {}
}
