/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      decrementHour(number: any, ...__args: never[]): any;

      decrementMin(number: any, ...__args: never[]): any;

      destroy(...__args: never[]): any;

      getCode(...__args: never[]): any;

      incrementHour(number: any, ...__args: never[]): any;

      incrementMin(number: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISAlarmClockDialog {}
}
