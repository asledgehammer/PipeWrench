/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISGameSoundVolumeControl:new */
    export class ISGameSoundVolumeControl extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static capture: any;

      dragging: any;

      fade: any;

      isSlider: any;

      joypadFocused: any;

      target: any;

      targetFunc: any;

      tooltip: any;

      tooltipUI: any;

      volume: any;

      constructor(x: any, y: any, width: any, height: any, target: any, targetFunc: any);

      getTooltip: (() => any) | any;

      getVolume: (() => any) | any;

      getVolumeAtX: ((x: any) => any) | any;

      instantiate: (() => any) | any;

      onJoypadDirLeft: ((joypadData: any) => any) | any;

      onJoypadDirRight: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      setJoypadFocused: ((focused: any) => any) | any;

      setVolume: ((volume: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISGameSoundVolumeControl {}
}
