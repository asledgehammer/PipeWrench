/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.General {
    /** @customConstructor ISDebugBlood:new */
    export class ISDebugBlood extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      ignoreSlider: any;

      partToSlider: any;

      updateTime: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      createChildren: (() => any) | any;

      initialise: (() => any) | any;

      onRandomBlood: (() => any) | any;

      onSliderChange: ((_newval: any, _slider: any) => any) | any;

      onZeroAll: (() => any) | any;

      setSliderValues: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.General.ISDebugBlood {}
}
