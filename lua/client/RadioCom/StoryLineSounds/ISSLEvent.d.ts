/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addEventSoundItem(_eventSound: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      drawEventSoundItem(y: any, item: any, alt: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      setEvent(_event: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.StoryLineSounds.ISSLEvent {}
}
