/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.NewSelectionSystem {
    export abstract class GridSquareSelector {
      static [id: string]: any;

      /** @noSelf */
      static MouseUp: (...__args: never[]) => any;

      /** @noSelf */
      static RenderUI: (...__args: never[]) => any;
    }
  }
  export namespace lua.server.NewSelectionSystem.GridSquareSelector {}
}
