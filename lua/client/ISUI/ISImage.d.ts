/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISImage:new */
    export class ISImage extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      font: any;

      mouseover: any;

      mouseovertext: any;

      texture: any;

      textureOverride: any;

      tooltipUI: any;

      constructor(x: any, y: any, width: any, height: any, texture: any);

      getTexture(...__args: never[]): any;

      setColor(r: any, g: any, b: any, ...__args: never[]): any;

      setMouseOverText(text: any, ...__args: never[]): any;

      updateTooltip(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISImage {}
}
