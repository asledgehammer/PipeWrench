/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.General {
    /** @customConstructor ISGameDebugPanel:new */
    export class ISGameDebugPanel extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      boolOptions: any;

      buttons: any;

      sliderOptions: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      addBoolOption: ((_title: any, _tag: any) => any) | any;

      addButtonInfo: ((_title: any, _command: any, _marginBot: any) => any) | any;

      addSliderOption: ((_java: any, _var: any, _min: any, _max: any, _step: any, _get: any, _set: any) => any) | any;

      createChildren: (() => any) | any;

      initialise: (() => any) | any;

      onClick: ((_button: any) => any) | any;

      onSliderChange: ((_newval: any, _slider: any) => any) | any;

      onTicked: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;

      onTickedValue: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.General.ISGameDebugPanel {}
}
