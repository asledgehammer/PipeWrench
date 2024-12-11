/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRadialProgressBar:new */
    export class ISRadialProgressBar extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      texture: any;

      constructor(x: any, y: any, width: any, height: any, texturePath: any);

      getTexture(...__args: never[]): any;

      getValue(...__args: never[]): any;

      setTexture(_tex: any, ...__args: never[]): any;

      setValue(_val: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISRadialProgressBar {}
}
