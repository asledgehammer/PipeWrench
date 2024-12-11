/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Context {
    export abstract class ISContextManager {
      static [id: string]: any;

      /** @noSelf */
      static getInstance: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.Context.ISContextManager {}
}
