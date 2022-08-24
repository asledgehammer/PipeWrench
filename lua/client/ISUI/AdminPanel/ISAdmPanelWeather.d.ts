/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      createChildren: (() => any) | any;

      onClick: ((_button: any) => any) | any;

      onSliderChange: ((_newval: any, _slider: any) => any) | any;

      onTicked: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISAdmPanelWeather {}
}
