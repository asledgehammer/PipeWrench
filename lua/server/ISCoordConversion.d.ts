/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server {
    export abstract class ISCoordConversion {
      static [id: string]: any;

      /** @noSelf */
      static ToScreen: (x: any, y: any, z: any, cz: any) => any;

      /** @noSelf */
      static ToWorld: (x: any, y: any, z: any) => any;
    }
  }
  export namespace lua.server.ISCoordConversion {}
}
