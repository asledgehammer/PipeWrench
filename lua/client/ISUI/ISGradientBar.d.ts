/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISGradientBar:new */
    export class ISGradientBar extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      gradientTex: any;

      highlightTex: any;

      highlightTex_L: any;

      highlightTex_R: any;

      settings: any;

      value: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      render(...__args: never[]): any;

      setBorderColor(_a: any, _r: any, _g: any, _b: any, ...__args: never[]): any;

      setBorderInnerColor(_a: any, _r: any, _g: any, _b: any, ...__args: never[]): any;

      setDarkAlpha(_alpha: any, ...__args: never[]): any;

      setDoKnob(_b: any, ...__args: never[]): any;

      setGradientTexture(_tex: any, ...__args: never[]): any;

      setHighlightRadius(_rad: any, ...__args: never[]): any;

      setValue(_v: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISGradientBar {}
}
