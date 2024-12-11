/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISAdmPanelWeather:new */
    export class ISAdmPanelWeather extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      bar1: any;

      bar2: any;

      bars: any;

      height: any;

      lblCurrentWeather: any;

      player: any;

      sliderCustomStrSlider: any;

      sliderDurationSlider: any;

      tickBoxFrontType: any;

      totalY: any;

      width: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      createChildren(...__args: never[]): any;

      onClick(_button: any, ...__args: never[]): any;

      onSliderChange(_newval: any, _slider: any, ...__args: never[]): any;

      onTicked(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISAdmPanelWeather {}
}
