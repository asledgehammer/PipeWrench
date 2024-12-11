/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.General {
    /** @customConstructor ISDebugBlood:new */
    export class ISDebugBlood extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      ignoreSlider: any;

      partToSlider: any;

      updateTime: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      createChildren(...__args: never[]): any;

      initialise(...__args: never[]): any;

      onRandomBlood(...__args: never[]): any;

      onSliderChange(_newval: any, _slider: any, ...__args: never[]): any;

      onZeroAll(...__args: never[]): any;

      setSliderValues(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.General.ISDebugBlood {}
}
