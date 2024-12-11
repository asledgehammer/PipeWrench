/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISModalRichText:new */
    export class ISModalRichText extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      chatText: any;

      destroyOnClick: any;

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

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      setHeightToContents(...__args: never[]): any;

      update(...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISModalRichText {}
}
