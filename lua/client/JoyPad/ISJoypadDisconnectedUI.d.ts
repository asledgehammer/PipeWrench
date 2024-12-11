/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.JoyPad {
    /** @customConstructor ISJoypadDisconnectedUI:new */
    export class ISJoypadDisconnectedUI extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      buttonKBM: any;

      label: any;

      playerNum: any;

      constructor(playerNum: any);

      renderControllerDisconnected(...__args: never[]): any;

      useKeyboardMouse(...__args: never[]): any;
    }
  }
  export namespace lua.client.JoyPad.ISJoypadDisconnectedUI {}
}
