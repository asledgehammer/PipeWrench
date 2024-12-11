/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMMedia:new */
    export class RWMMedia extends lua.client.RadioCom.RadioWindowModules.RWMPanel {
      [id: string]: any;
      static [id: string]: any;

      cdTex: any;

      fontheight: any;

      idleText: any;

      itemDropBox: any;

      lcd: any;

      lcdBlue: any;

      lcdGreen: any;

      mediaIndex: any;

      mediaText: any;

      tapeTex: any;

      textNoCD: any;

      textNoTape: any;

      textPlay: any;

      textStop: any;

      toggleOnOffButton: any;

      constructor(x: any, y: any, width: any, height: any);

      addMedia(_items: any, ...__args: never[]): any;

      addMediaAux(item: any, ...__args: never[]): any;

      getMediaText(...__args: never[]): any;

      removeMedia(...__args: never[]): any;

      togglePlayMedia(...__args: never[]): any;

      verifyItem(_item: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMMedia {}
}
