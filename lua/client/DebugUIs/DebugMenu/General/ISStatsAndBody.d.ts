/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.General {
    /** @customConstructor ISStatsAndBody:new */
    export class ISStatsAndBody extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      boolOptions: any;

      sliderOptions: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      addBoolOption: ((_java: any, _var: any, _get: any, _set: any) => any) | any;

      addSliderOption: ((_java: any, _var: any, _min: any, _max: any, _step: any, _get: any, _set: any) => any) | any;

      createChildren: (() => any) | any;

      initialise: (() => any) | any;

      onSliderChange: ((_newval: any, _slider: any) => any) | any;

      onTicked: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.General.ISStatsAndBody {}
}
