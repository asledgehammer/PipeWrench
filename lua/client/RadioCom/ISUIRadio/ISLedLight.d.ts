/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      createChildren(...__args: never[]): any;

      getLedIsOn(...__args: never[]): any;

      render(...__args: never[]): any;

      setBlinkingSpeed(_i: any, ...__args: never[]): any;

      setIsBlinking(_b: any, ...__args: never[]): any;

      setLedColor(_a: any, _r: any, _g: any, _b: any, ...__args: never[]): any;

      setLedColorOff(_a: any, _r: any, _g: any, _b: any, ...__args: never[]): any;

      setLedIsOn(_b: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISLedLight {}
}
