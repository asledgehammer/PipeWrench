/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Items {
    export abstract class ItemBindingHandler {
      static [id: string]: any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static toggleLight: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Items.ItemBindingHandler {}
}
