/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRect:new */
    export class ISRect extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      a: any;

      b: any;

      g: any;

      r: any;

      constructor(x: any, y: any, width: any, height: any, a: any, r: any, g: any, b: any);
    }
  }
  export namespace lua.client.ISUI.ISRect {}
}
