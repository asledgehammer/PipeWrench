/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISDigitalCode:new */
    export class ISDigitalCode extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      button1m: any;

      button1p: any;

      button2m: any;

      button2p: any;

      button3m: any;

      button3p: any;

      character: any;

      name: any;

      _new_: any;

      number1: any;

      number2: any;

      number3: any;

      ok: any;

      onclick: any;

      padlock: any;

      player: any;

      playerX: any;

      playerY: any;

      target: any;

      thumpable: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        target: any,
        onclick: any,
        player: any,
        padlock: any,
        thumpable: any,
        _new_: any
      );

      decrement: ((number: any) => any) | any;

      destroy: (() => any) | any;

      getCode: (() => any) | any;

      increment: ((number: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISDigitalCode {}
}
