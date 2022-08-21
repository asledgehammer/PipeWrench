/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.NewSelectionSystem {
    export abstract class GridSquareSelector {
      static [id: string]: any;

      /** @noSelf */
      static MouseUp: () => any;

      /** @noSelf */
      static RenderUI: () => any;
    }
  }
  export namespace lua.server.NewSelectionSystem.GridSquareSelector {}
}
