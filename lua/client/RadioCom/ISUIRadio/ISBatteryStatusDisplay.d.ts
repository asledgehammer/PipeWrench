/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.ISUIRadio {
    /** @customConstructor ISBatteryStatusDisplay:new */
    export class ISBatteryStatusDisplay extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      backTexture: any;

      doLed: any;

      fontheight: any;

      led: any;

      power: any;

      powerDisp: any;

      powerDispH: any;

      powerInt: any;

      constructor(x: any, y: any, width: any, height: any, addAlertLed: any);

      createChildren(...__args: never[]): any;

      render(...__args: never[]): any;

      round(num: any, idp: any, ...__args: never[]): any;

      setPower(_power: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISBatteryStatusDisplay {}
}
