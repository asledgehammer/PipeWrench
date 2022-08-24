/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Items {
    export abstract class ItemBindingHandler {
      static [id: string]: any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;

      /** @noSelf */
      static toggleLight: (key: any) => any;
    }
  }
  export namespace lua.server.Items.ItemBindingHandler {}
}
