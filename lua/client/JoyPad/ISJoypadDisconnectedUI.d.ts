/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.JoyPad {
    /** @customConstructor ISJoypadDisconnectedUI:new */
    export class ISJoypadDisconnectedUI extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      buttonKBM: any;

      label: any;

      playerNum: any;

      constructor(playerNum: any);

      renderControllerDisconnected: (() => any) | any;

      useKeyboardMouse: (() => any) | any;
    }
  }
  export namespace lua.client.JoyPad.ISJoypadDisconnectedUI {}
}
