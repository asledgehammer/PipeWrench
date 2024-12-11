/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addPlotPoint(dataset: any, vertbarCol: any, ...__args: never[]): any;

      applyMinMax(_minmax: any, indexLine: any, ...__args: never[]): any;

      calcMinMax(indexLine: any, minmax: any, ...__args: never[]): any;

      clearHistory(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      defineVariable(name: any, color: any, minVal: any, maxVal: any, ...__args: never[]): any;

      getDataSet(...__args: never[]): any;

      getVarCount(...__args: never[]): any;

      getVars(...__args: never[]): any;

      render(...__args: never[]): any;

      setHorzLine(value: any, col: any, ...__args: never[]): any;

      setVariableEnabled(_name: any, _bool: any, ...__args: never[]): any;

      unsetHorzLine(idx: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.ValuePlotter {}
}
