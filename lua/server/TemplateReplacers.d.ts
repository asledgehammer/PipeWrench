/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server {
    export abstract class TemplateReplacers {
      static [id: string]: any;

      /** @noSelf */
      static init: () => any;

      /** @noSelf */
      static runExample: () => any;
    }
  }
  export namespace lua.server.TemplateReplacers {}
}
