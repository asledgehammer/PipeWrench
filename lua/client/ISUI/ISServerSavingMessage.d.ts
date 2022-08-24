/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISServerSavingMessage:new */
    export class ISServerSavingMessage extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      richtext: any;

      text: any;

      constructor(x: any, y: any, width: any, height: any, text: any);

      destroy: (() => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static showPauseMessage: () => any;

      /** @noSelf */
      static showSavingFinishMessage: () => any;
    }
  }
  export namespace lua.client.ISUI.ISServerSavingMessage {}
}
