/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISVolumeIndicator:new */
    export class ISVolumeIndicator extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      fade: any;

      iserror: any;

      isSlider: any;

      serverVOIPEnable: any;

      target: any;

      targetFunc: any;

      volume: any;

      constructor(x: any, y: any, width: any, height: any, target: any, targetFunc: any);

      render: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISVolumeIndicator {}
}
