/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      createChildren: (() => any) | any;

      getHoverVolume: (() => any) | any;

      getVolume: (() => any) | any;

      getVolumeFromXPosition: ((_x: any) => any) | any;

      getVolumeSteps: (() => any) | any;

      isDragging: (() => any) | any;

      render: (() => any) | any;

      resetHoverVolume: (() => any) | any;

      setEnableControls: ((b: any) => any) | any;

      setHeight: ((h: any) => any) | any;

      setHoverVolume: ((_vol: any) => any) | any;

      setVolume: ((vol: any) => any) | any;

      setVolumeJoypad: ((_up: any) => any) | any;

      setVolumeSteps: ((vol: any) => any) | any;

      setWidth: ((w: any) => any) | any;

      setX: ((x: any) => any) | any;

      setY: ((y: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISVolumeBar {}
}
