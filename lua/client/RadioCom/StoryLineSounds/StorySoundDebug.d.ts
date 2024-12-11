/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.StoryLineSounds {
    /** @customConstructor ISStorySoundsDebug:new */
    export class ISStorySoundsDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      eventTab: any;

      managerTab: any;

      minimumHeight: any;

      minimumWidth: any;

      panels: any;

      pin: any;

      tabpanel: any;

      constructor(x: any, y: any, width: any, height: any);

      onResize(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.StoryLineSounds.StorySoundDebug {}
}
