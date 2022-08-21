/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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
        param2: any
      );

      destroy: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      setHeightToContents: (() => any) | any;

      update: (() => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISModalRichText {}
}
