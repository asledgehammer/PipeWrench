/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISAlarmClockDialog:new */
    export class ISAlarmClockDialog extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      alarm: any;

      button1m: any;

      button1p: any;

      button2m: any;

      button2p: any;

      character: any;

      hours: any;

      mins: any;

      name: any;

      ok: any;

      player: any;

      playerX: any;

      playerY: any;

      setAlarm: any;

      constructor(x: any, y: any, width: any, height: any, player: any, alarm: any);

      decrementHour: ((number: any) => any) | any;

      decrementMin: ((number: any) => any) | any;

      destroy: (() => any) | any;

      getCode: (() => any) | any;

      incrementHour: ((number: any) => any) | any;

      incrementMin: ((number: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISAlarmClockDialog {}
}
