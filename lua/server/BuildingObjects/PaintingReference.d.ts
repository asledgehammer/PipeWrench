/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    export abstract class OtherPainting {
      static [id: string]: any;
    }

    export abstract class Painting {
      static [id: string]: any;
    }
  }
  export namespace lua.server.BuildingObjects.PaintingReference {}
}
