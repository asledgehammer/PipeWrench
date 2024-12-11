/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      getVolume(...__args: never[]): any;

      getVolumeAtX(x: any, ...__args: never[]): any;

      onJoypadDirLeft(joypadData: any, ...__args: never[]): any;

      onJoypadDirRight(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setJoypadFocused(focused: any, ...__args: never[]): any;

      setVolume(volume: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISMegaVolumeControl {}
}
