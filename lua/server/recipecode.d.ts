/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server {
    export abstract class Recipe {
      static [id: string]: any;
    }
  }
  export namespace lua.server.recipecode {}
}
