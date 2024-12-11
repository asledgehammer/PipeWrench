/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.General {
    /** @customConstructor ISSearchMode:new */
    export class ISSearchMode extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      allOptions: any;

      boolOptions: any;

      buttons: any;

      floatOptions: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      addBoolOption(_id: any, _x: any, _y: any, _w: any, _tag: any, ...__args: never[]): any;

      addButton(
        _id: any,
        _x: any,
        _y: any,
        _w: any,
        _h: any,
        _margin: any,
        _command: any,
        _marginBot: any,
        ...__args: never[]
      ): any;

      addFloatOption(
        _id: any,
        _x: any,
        _y: any,
        _w: any,
        _java: any,
        _min: any,
        _max: any,
        _stepsize: any,
        _get: any,
        _set: any,
        _reqIdx: any,
        ...__args: never[]
      ): any;

      createChildren(...__args: never[]): any;

      initialise(...__args: never[]): any;

      onClick(_button: any, ...__args: never[]): any;

      onSliderChange(_newval: any, _slider: any, ...__args: never[]): any;

      onTicked(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;

      onTickedValue(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.General.ISSearchMode {}
}
