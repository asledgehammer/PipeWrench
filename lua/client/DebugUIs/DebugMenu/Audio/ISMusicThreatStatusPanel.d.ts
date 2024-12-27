/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Audio {
    /** @customConstructor ISMusicThreatStatusPanel:new */
    export class ISMusicThreatStatusPanel extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      allOptions: any;

      buttonReload: any;

      floats: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      addFloatOption(_label: any, _id: any, _x: any, _y: any, _w: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onButtonReload(...__args: never[]): any;

      onSliderChange(_newval: any, _slider: any, ...__args: never[]): any;

      onTicked(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;

      setSliders(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Audio.ISMusicThreatStatusPanel {}
}
