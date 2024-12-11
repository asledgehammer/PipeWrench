/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISCollapsableModalRichText:new */
    export class ISCollapsableModalRichText extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      chatText: any;

      name: any;

      no: any;

      ok: any;

      onclick: any;

      param1: any;

      param2: any;

      player: any;

      target: any;

      text: any;

      yes: any;

      yesno: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        text: any,
        yesno: any,
        target: any,
        onclick: any,
        player: any,
        param1: any,
        param2: any,
      );

      destroy(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDirLeft(...__args: never[]): any;

      onJoypadDirRight(...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISCollapsableModalRichText {}
}
