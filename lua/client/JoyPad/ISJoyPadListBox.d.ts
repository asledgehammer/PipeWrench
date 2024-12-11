/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.JoyPad {
    /** @customConstructor ISJoypadListBox:new */
    export class ISJoypadListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      joypadData: any;

      playerNum: any;

      constructor(x: any, y: any, w: any, h: any, playerNum: any, joypadData: any);

      cmdAddNew(...__args: never[]): any;

      cmdAddSaved(player: any, ...__args: never[]): any;

      cmdCancel(...__args: never[]): any;

      cmdTakeOver(playerNum: any, ...__args: never[]): any;

      fill(...__args: never[]): any;

      getUserNameCallback(button: any, playerObj: any, ...__args: never[]): any;

      invoke(...__args: never[]): any;

      /** @noSelf */
      static Create: (playerNum: any, joypadData: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.JoyPad.ISJoyPadListBox {}
}
