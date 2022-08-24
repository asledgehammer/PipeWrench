/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRadialProgressBar:new */
    export class ISRadialProgressBar extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      texture: any;

      constructor(x: any, y: any, width: any, height: any, texturePath: any);

      getTexture: (() => any) | any;

      getValue: (() => any) | any;

      setTexture: ((_tex: any) => any) | any;

      setValue: ((_val: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISRadialProgressBar {}
}
