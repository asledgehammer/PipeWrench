/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.General {
    /** @customConstructor ISGameDebugPanel:new */
    export class ISGameDebugPanel extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      boolOptions: any;

      buttons: any;

      sliderOptions: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      addBoolOption(_title: any, _tag: any, ...__args: never[]): any;

      addButtonInfo(_title: any, _command: any, _marginBot: any, ...__args: never[]): any;

      addSliderOption(
        _java: any,
        _var: any,
        _min: any,
        _max: any,
        _step: any,
        _get: any,
        _set: any,
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
  export namespace lua.client.DebugUIs.DebugMenu.General.ISGameDebugPanel {}
}
