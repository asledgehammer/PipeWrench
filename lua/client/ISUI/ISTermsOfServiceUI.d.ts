/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      createChildren(...__args: never[]): any;

      destroy(...__args: never[]): any;

      onButton1(button: any, ...__args: never[]): any;

      onButton2(button: any, ...__args: never[]): any;

      onButtonAccept(button: any, ...__args: never[]): any;

      onButtonQuit(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnGameStateEnter: (javaStateObj: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISTermsOfServiceUI {}
}
