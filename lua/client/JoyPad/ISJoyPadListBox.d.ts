/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.JoyPad {
    /** @customConstructor ISJoypadListBox:new */
    export class ISJoypadListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      joypadData: any;

      playerNum: any;

      constructor(x: any, y: any, w: any, h: any, playerNum: any, joypadData: any);

      cmdAddNew: (() => any) | any;

      cmdAddSaved: ((player: any) => any) | any;

      cmdCancel: (() => any) | any;

      cmdTakeOver: ((playerNum: any) => any) | any;

      fill: (() => any) | any;

      getUserNameCallback: ((button: any, playerObj: any) => any) | any;

      invoke: (() => any) | any;

      /** @noSelf */
      static Create: (playerNum: any, joypadData: any) => any;
    }
  }
  export namespace lua.client.JoyPad.ISJoyPadListBox {}
}
