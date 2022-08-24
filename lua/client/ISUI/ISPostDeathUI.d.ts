/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      configButton: ((button: any) => any) | any;

      createChildren: (() => any) | any;

      onConfirmQuitToDesktop: ((button: any) => any) | any;

      onExit: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadReactivate: ((joypadData: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onQuitToDesktop: (() => any) | any;

      onRespawn: (() => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static OnPlayerDeath: (playerObj: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISPostDeathUI {}
}
