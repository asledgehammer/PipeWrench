/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addButton(_id: any, _x: any, _y: any, _w: any, _h: any, _title: any, ...__args: never[]): any;

      addFloatOption(_id: any, _float: any, _x: any, _y: any, _w: any, ...__args: never[]): any;

      addHorzBar(_y: any, ...__args: never[]): any;

      addLabel(_id: any, _x: any, _y: any, _title: any, _font: any, _bLeft: any, ...__args: never[]): any;

      addSlider(_id: any, _x: any, _y: any, _w: any, _h: any, ...__args: never[]): any;

      addTickBox(_id: any, _x: any, _y: any, _w: any, _h: any, _title: any, options: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      initialise(...__args: never[]): any;

      onSliderChange(_newval: any, _slider: any, ...__args: never[]): any;

      onTicked(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;

      onTickedValue(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Puddles.PuddlesControl {}
}
