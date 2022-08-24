/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Items {
    export abstract class AcceptItemFunction {
      static [id: string]: any;

      /** @noSelf */
      static FirstAidKit: (container: any, item: any) => any;

      /** @noSelf */
      static KeyRing: (container: any, item: any) => any;
    }
  }
  export namespace lua.server.Items.AcceptItemFunction {}
}
