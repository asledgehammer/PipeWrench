/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor ClimDebuggersPanel:new */
    export class ClimDebuggersPanel extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      buttons: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      addButtonInfo: ((_title: any, _func: any, _marginBot: any, _arg: any) => any) | any;

      createChildren: (() => any) | any;

      initialise: (() => any) | any;

      onClick: ((_button: any) => any) | any;

      onSliderChange: ((_newval: any, _slider: any) => any) | any;

      onTicked: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;

      onTickedValue: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnSimulationButton: () => any;

      /** @noSelf */
      static OnSimulationButtonOverride: (_rainModOverride: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.ClimDebuggersPanel {}
}
