/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server {
    export abstract class ISBuildingBlueprintManager {
      static [id: string]: any;

      /** @noSelf */
      static MouseDown: (x: any, y: any) => any;

      /** @noSelf */
      static MouseMove: (x: any, y: any, wx: any, wy: any) => any;

      /** @noSelf */
      static RenderUI: () => any;
    }
  }
  export namespace lua.server.ISBuildingBlueprintManager {}
}
