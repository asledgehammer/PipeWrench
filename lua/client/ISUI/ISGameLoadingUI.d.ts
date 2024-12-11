/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISGameLoadingUI:new */
    export class ISGameLoadingUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonQuit: any;

      status: any;

      constructor(status: any);

      configButton(button: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onExit(...__args: never[]): any;

      onExitToDesktop(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      /** @noSelf */
      static OnJoypadActivateUI: (id: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISGameLoadingUI {}
}
