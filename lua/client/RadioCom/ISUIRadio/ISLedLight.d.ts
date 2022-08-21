/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.ISUIRadio {
    /** @customConstructor ISLedLight:new */
    export class ISLedLight extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      doLedBlink: any;

      ledBackTexture: any;

      ledBlinkSpeed: any;

      ledCntr: any;

      ledCol: any;

      ledColOff: any;

      ledIsOn: any;

      ledTexture: any;

      oldState: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      getLedIsOn: (() => any) | any;

      render: (() => any) | any;

      setBlinkingSpeed: ((_i: any) => any) | any;

      setIsBlinking: ((_b: any) => any) | any;

      setLedColor: ((_a: any, _r: any, _g: any, _b: any) => any) | any;

      setLedColorOff: ((_a: any, _r: any, _g: any, _b: any) => any) | any;

      setLedIsOn: ((_b: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISLedLight {}
}
