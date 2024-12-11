/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISServerSavingMessage:new */
    export class ISServerSavingMessage extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      richtext: any;

      text: any;

      constructor(x: any, y: any, width: any, height: any, text: any);

      destroy(...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static showPauseMessage: (...__args: never[]) => any;

      /** @noSelf */
      static showSavingFinishMessage: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISServerSavingMessage {}
}
