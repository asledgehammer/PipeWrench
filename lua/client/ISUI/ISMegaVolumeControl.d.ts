/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISMegaVolumeControl:new */
    export class ISMegaVolumeControl extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      fade: any;

      isSlider: any;

      joypadFocused: any;

      target: any;

      targetFunc: any;

      tooltipUI: any;

      volume: any;

      constructor(x: any, y: any, width: any, height: any, target: any, targetFunc: any);

      getVolume: (() => any) | any;

      getVolumeAtX: ((x: any) => any) | any;

      onJoypadDirLeft: ((joypadData: any) => any) | any;

      onJoypadDirRight: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      setJoypadFocused: ((focused: any) => any) | any;

      setVolume: ((volume: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISMegaVolumeControl {}
}
