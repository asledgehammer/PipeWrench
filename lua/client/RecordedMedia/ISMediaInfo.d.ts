/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RecordedMedia {
    /** @customConstructor ISMediaInfo:new */
    export class ISMediaInfo extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      buttonOK: any;

      fontHgt: any;

      name: any;

      playerNum: any;

      richText: any;

      text: any;

      constructor(x: any, y: any, width: any, height: any, playerNum: any, text: any);

      close: (() => any) | any;

      createChildren: (() => any) | any;

      destroy: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      prerender: (() => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static openPanel: (_playerNum: any, _text: any) => any;
    }
  }
  export namespace lua.client.RecordedMedia.ISMediaInfo {}
}
