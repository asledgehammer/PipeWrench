/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor ClimateOptionsDebug:new */
    export class ClimateOptionsDebug extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      allOptions: any;

      bools: any;

      clim: any;

      colors: any;

      floats: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      addBoolOption: ((_id: any, _bool: any, _x: any, _y: any, _w: any) => any) | any;

      addColorOption: ((_id: any, _color: any, _x: any, _y: any, _w: any) => any) | any;

      addFloatOption: ((_id: any, _float: any, _x: any, _y: any, _w: any) => any) | any;

      createChildren: (() => any) | any;

      initialise: (() => any) | any;

      onSliderChange: ((_newval: any, _slider: any) => any) | any;

      onTicked: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;

      onTickedValue: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.ClimateOptionsDebug {}
}
