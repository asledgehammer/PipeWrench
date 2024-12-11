/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.ISUIRadio {
    /** @customConstructor ISVolumeBar:new */
    export class ISVolumeBar extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      dimChange: any;

      dragInside: any;

      elBackgroundColor: any;

      elBorderColor: any;

      elBorderHighlightColor: any;

      elHighlightColor: any;

      elHoverColor: any;

      enableControls: any;

      fontheight: any;

      greyCol: any;

      hoverVolume: any;

      innerMargin: any;

      joyMeter: any;

      mouseEnabled: any;

      onVolumeChange: any;

      onVolumeChangeTarget: any;

      posChange: any;

      volume: any;

      volumeSteps: any;

      constructor(x: any, y: any, width: any, height: any, onVolumeChange: any, onVolumeChangeTarget: any);

      createChildren(...__args: never[]): any;

      getHoverVolume(...__args: never[]): any;

      getVolume(...__args: never[]): any;

      getVolumeFromXPosition(_x: any, ...__args: never[]): any;

      getVolumeSteps(...__args: never[]): any;

      isDragging(...__args: never[]): any;

      render(...__args: never[]): any;

      resetHoverVolume(...__args: never[]): any;

      setEnableControls(b: any, ...__args: never[]): any;

      setHeight(h: any, ...__args: never[]): any;

      setHoverVolume(_vol: any, ...__args: never[]): any;

      setVolume(vol: any, ...__args: never[]): any;

      setVolumeJoypad(_up: any, ...__args: never[]): any;

      setVolumeSteps(vol: any, ...__args: never[]): any;

      setWidth(w: any, ...__args: never[]): any;

      setX(x: any, ...__args: never[]): any;

      setY(y: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISVolumeBar {}
}
