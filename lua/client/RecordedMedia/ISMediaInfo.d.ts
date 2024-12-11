/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      close(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      destroy(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      prerender(...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static openPanel: (_playerNum: any, _text: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.RecordedMedia.ISMediaInfo {}
}
