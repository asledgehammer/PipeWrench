/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Context {
    export abstract class ISContextManager {
      static [id: string]: any;

      /** @noSelf */
      static getInstance: () => any;
    }
  }
  export namespace lua.client.Context.ISContextManager {}
}
