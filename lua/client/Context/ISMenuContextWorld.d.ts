/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Context {
    export abstract class ISMenuContextWorld {
      static [id: string]: any;

      /** @noSelf */
      static new: () => any;
    }
  }
  export namespace lua.client.Context.ISMenuContextWorld {}
}
