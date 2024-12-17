/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Audio {
    /** @customConstructor ISMusicIntensityEventsPanel:new */
    export class ISMusicIntensityEventsPanel extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      buttonClear: any;

      buttonReload: any;

      eventList: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      createChildren(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      onButtonClear(...__args: never[]): any;

      onButtonReload(...__args: never[]): any;

      populateEventList(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Audio.ISMusicIntensityEventsPanel {}
}
