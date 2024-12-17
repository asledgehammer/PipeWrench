/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor IS9Patch:new */
    export class IS9Patch extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      background: any;

      backgroundColor: any;

      border: any;

      borderColor: any;

      drawOnPrerender: any;

      img: any;

      constructor(x: any, y: any, width: any, height: any, _images: any);

      renderInternal(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.IS9Patch {}
}
