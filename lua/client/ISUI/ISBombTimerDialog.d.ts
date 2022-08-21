/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISBombTimerDialog:new */
    export class ISBombTimerDialog extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      button10m: any;

      button10p: any;

      button1m: any;

      button1p: any;

      button5m: any;

      button5p: any;

      name: any;

      no: any;

      param1: any;

      param2: any;

      param3: any;

      param4: any;

      player: any;

      playerNum: any;

      playerX: any;

      playerY: any;

      prompt: any;

      target: any;

      targetFunc: any;

      textBox: any;

      time: any;

      yes: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        prompt: any,
        time: any,
        player: any,
        target: any,
        targetFunc: any,
        param1: any,
        param2: any,
        param3: any,
        param4: any
      );

      addTime: ((seconds: any) => any) | any;

      destroy: (() => any) | any;

      getTime: (() => any) | any;

      onButton: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISBombTimerDialog {}
}
