/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      createChildren: (() => any) | any;

      render: (() => any) | any;

      round: ((num: any, idp: any) => any) | any;

      setPower: ((_power: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISBatteryStatusDisplay {}
}
