/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor NewFogDebug:new */
    export class NewFogDebug extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      allOptions: any;

      bools: any;

      clim: any;

      colors: any;

      floatOptions: any;

      floats: any;

      newFogID: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      addBoolOption(_id: any, _x: any, _y: any, _w: any, ...__args: never[]): any;

      addFloatOption(
        _id: any,
        _x: any,
        _y: any,
        _w: any,
        _min: any,
        _max: any,
        _stepsize: any,
        ...__args: never[]
      ): any;

      addFloatOptionAuto(_id: any, _float: any, _x: any, _y: any, _w: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      initialise(...__args: never[]): any;

      onSliderChange(_newval: any, _slider: any, ...__args: never[]): any;

      onTicked(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;

      onTickedValue(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.NewFogDebug {}
}
