/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISPostDeathUI:new */
    export class ISPostDeathUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonExit: any;

      buttonQuit: any;

      buttonRespawn: any;

      playerIndex: any;

      quitToDesktopDialog: any;

      screenHeight: any;

      screenWidth: any;

      screenX: any;

      screenY: any;

      textY: any;

      waitOver: any;

      constructor(playerIndex: any);

      configButton(button: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onConfirmQuitToDesktop(button: any, ...__args: never[]): any;

      onExit(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onJoypadReactivate(joypadData: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onQuitToDesktop(...__args: never[]): any;

      onRespawn(...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static OnPlayerDeath: (playerObj: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISPostDeathUI {}
}
