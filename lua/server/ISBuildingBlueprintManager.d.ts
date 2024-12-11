/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server {
    export abstract class ISBuildingBlueprintManager {
      static [id: string]: any;

      /** @noSelf */
      static MouseDown: (x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static MouseMove: (x: any, y: any, wx: any, wy: any, ...__args: never[]) => any;

      /** @noSelf */
      static RenderUI: (...__args: never[]) => any;
    }
  }
  export namespace lua.server.ISBuildingBlueprintManager {}
}
