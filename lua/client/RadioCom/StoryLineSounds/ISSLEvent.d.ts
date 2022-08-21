/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.StoryLineSounds {
    /** @customConstructor ISSLEvent:new */
    export class ISSLEvent extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      eventData: any;

      eventFrame: any;

      eventSoundList: any;

      storyEvent: any;

      constructor(x: any, y: any, width: any, height: any);

      addEventSoundItem: ((_eventSound: any) => any) | any;

      createChildren: (() => any) | any;

      drawEventSoundItem: ((y: any, item: any, alt: any) => any) | any;

      onResize: (() => any) | any;

      render: (() => any) | any;

      setEvent: ((_event: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.StoryLineSounds.ISSLEvent {}
}
