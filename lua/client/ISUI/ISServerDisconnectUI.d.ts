/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISServerDisconnectUI:new */
    export class ISServerDisconnectUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonExit: any;

      buttonQuit: any;

      reason: any;

      constructor(reason: any);

      configButton: ((button: any) => any) | any;

      createChildren: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onToDesktop: (() => any) | any;

      onToMainMenu: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISServerDisconnectUI {}
}
