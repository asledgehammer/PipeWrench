/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addMedia: ((_items: any) => any) | any;

      addMediaAux: ((item: any) => any) | any;

      getMediaText: (() => any) | any;

      removeMedia: (() => any) | any;

      togglePlayMedia: (() => any) | any;

      verifyItem: ((_item: any) => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMMedia {}
}
