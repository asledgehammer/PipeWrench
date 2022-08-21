/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      getTexture: (() => any) | any;

      setColor: ((r: any, g: any, b: any) => any) | any;

      setMouseOverText: ((text: any) => any) | any;

      updateTooltip: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISImage {}
}
