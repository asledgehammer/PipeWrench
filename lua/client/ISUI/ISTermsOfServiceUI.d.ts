/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISTermsOfServiceUI:new */
    export class ISTermsOfServiceUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      button1: any;

      button2: any;

      buttonAccept: any;

      buttonQuit: any;

      destroyOnClick: any;

      name: any;

      ok: any;

      richText: any;

      texture: any;

      textureY: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      destroy: (() => any) | any;

      onButton1: ((button: any) => any) | any;

      onButton2: ((button: any) => any) | any;

      onButtonAccept: ((button: any) => any) | any;

      onButtonQuit: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnGameStateEnter: (javaStateObj: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISTermsOfServiceUI {}
}
