/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.erosion.debug {
    export abstract class Point2D {
      static [id: string]: any;

      new: ((_x: any, _y: any) => any) | any;
    }
  }
  export namespace lua.client.erosion.debug.Point2D {}
}
