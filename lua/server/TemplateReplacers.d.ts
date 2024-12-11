/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server {
    export abstract class TemplateReplacers {
      static [id: string]: any;

      /** @noSelf */
      static init: (...__args: never[]) => any;

      /** @noSelf */
      static runExample: (...__args: never[]) => any;
    }
  }
  export namespace lua.server.TemplateReplacers {}
}
