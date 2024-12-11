/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISAdmPanelClimate:new */
    export class ISAdmPanelClimate extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      height: any;

      LightColorPanel_ext: any;

      LightColorPanel_int: any;

      LightColorPanelAlpha_ext: any;

      LightColorPanelAlpha_int: any;

      player: any;

      tempSliderMod: any;

      width: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addUI(_name: any, _tickbox: any, _label: any, _slider: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onClick(_button: any, ...__args: never[]): any;

      onMadeActive(...__args: never[]): any;

      onSliderChange(_newval: any, _slider: any, ...__args: never[]): any;

      onTicked(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISAdmPanelClimate {}
}
