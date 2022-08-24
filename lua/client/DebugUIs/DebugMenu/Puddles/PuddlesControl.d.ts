/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Puddles {
    /** @customConstructor PuddlesControl:new */
    export class PuddlesControl extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      allOptions: any;

      bools: any;

      colors: any;

      floats: any;

      horzBars: any;

      horzBarW: any;

      horzBarX: any;

      puddles: any;

      constructor(x: any, y: any, width: any, height: any);

      addButton: ((_id: any, _x: any, _y: any, _w: any, _h: any, _title: any) => any) | any;

      addFloatOption: ((_id: any, _float: any, _x: any, _y: any, _w: any) => any) | any;

      addHorzBar: ((_y: any) => any) | any;

      addLabel: ((_id: any, _x: any, _y: any, _title: any, _font: any, _bLeft: any) => any) | any;

      addSlider: ((_id: any, _x: any, _y: any, _w: any, _h: any) => any) | any;

      addTickBox: ((_id: any, _x: any, _y: any, _w: any, _h: any, _title: any, options: any) => any) | any;

      createChildren: (() => any) | any;

      initialise: (() => any) | any;

      onSliderChange: ((_newval: any, _slider: any) => any) | any;

      onTicked: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;

      onTickedValue: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Puddles.PuddlesControl {}
}
