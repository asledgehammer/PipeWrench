/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor ClimDebuggersPanel:new */
    export class ClimDebuggersPanel extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      buttons: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      addButtonInfo(_title: any, _func: any, _marginBot: any, _arg: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      initialise(...__args: never[]): any;

      onClick(_button: any, ...__args: never[]): any;

      onSliderChange(_newval: any, _slider: any, ...__args: never[]): any;

      onTicked(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;

      onTickedValue(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnSimulationButton: (...__args: never[]) => any;

      /** @noSelf */
      static OnSimulationButtonOverride: (_rainModOverride: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.ClimDebuggersPanel {}
}
