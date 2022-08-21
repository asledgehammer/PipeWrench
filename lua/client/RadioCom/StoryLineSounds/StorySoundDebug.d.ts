/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      onResize: (() => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.StoryLineSounds.StorySoundDebug {}
}
