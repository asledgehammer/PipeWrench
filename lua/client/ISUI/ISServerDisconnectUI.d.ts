/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISServerDisconnectUI:new */
    export class ISServerDisconnectUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonExit: any;

      buttonQuit: any;

      reason: any;

      constructor(reason: any);

      configButton(button: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onToDesktop(...__args: never[]): any;

      onToMainMenu(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISServerDisconnectUI {}
}
