/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISGameLoadingUI:new */
    export class ISGameLoadingUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonQuit: any;

      status: any;

      constructor(status: any);

      configButton: ((button: any) => any) | any;

      createChildren: (() => any) | any;

      onExit: (() => any) | any;

      onExitToDesktop: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      /** @noSelf */
      static OnJoypadActivateUI: (id: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISGameLoadingUI {}
}
