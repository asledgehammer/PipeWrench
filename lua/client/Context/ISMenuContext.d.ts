/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Context {
    export abstract class ISMenuContext {
      static [id: string]: any;

      /** @noSelf */
      static new: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.Context.ISMenuContext {}
}
