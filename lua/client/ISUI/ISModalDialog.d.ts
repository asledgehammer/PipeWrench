/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISModalDialog:new */
    export class ISModalDialog extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

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

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static CalcSize: (width: any, height: any, text: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISModalDialog {}
}
