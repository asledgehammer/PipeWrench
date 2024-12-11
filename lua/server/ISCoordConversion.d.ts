/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server {
    export abstract class ISCoordConversion {
      static [id: string]: any;

      /** @noSelf */
      static ToScreen: (x: any, y: any, z: any, cz: any, ...__args: never[]) => any;

      /** @noSelf */
      static ToWorld: (x: any, y: any, z: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.ISCoordConversion {}
}
