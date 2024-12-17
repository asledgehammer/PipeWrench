/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Map.MapObjects {
    export abstract class MOFeedingTrough {
      static [id: string]: any;

      /** @noSelf */
      static generateContainer: (trough: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Map.MapObjects.MOFeedingTrough {}
}
