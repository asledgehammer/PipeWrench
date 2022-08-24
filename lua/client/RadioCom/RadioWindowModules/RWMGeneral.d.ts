/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMGeneral:new */
    export class RWMGeneral extends lua.client.RadioCom.RadioWindowModules.RWMPanel {
      [id: string]: any;
      static [id: string]: any;

      deviceFrequency: any;

      fontheight: any;

      infoLines: any;

      isoTexture: any;

      isTv: any;

      itemTexture: any;

      constructor(x: any, y: any, width: any, height: any);

      addInfoLine: ((_prefix: any, _line: any) => any) | any;

      recalulateDim: (() => any) | any;

      setInfoLines: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMGeneral {}
}
