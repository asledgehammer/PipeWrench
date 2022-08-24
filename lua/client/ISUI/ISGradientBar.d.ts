/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      createChildren: (() => any) | any;

      render: (() => any) | any;

      setBorderColor: ((_a: any, _r: any, _g: any, _b: any) => any) | any;

      setBorderInnerColor: ((_a: any, _r: any, _g: any, _b: any) => any) | any;

      setDarkAlpha: ((_alpha: any) => any) | any;

      setDoKnob: ((_b: any) => any) | any;

      setGradientTexture: ((_tex: any) => any) | any;

      setHighlightRadius: ((_rad: any) => any) | any;

      setValue: ((_v: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISGradientBar {}
}
