/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Items {
    export abstract class AcceptItemFunction {
      static [id: string]: any;

      /** @noSelf */
      static FirstAidKit: (container: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static KeyRing: (container: any, item: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Items.AcceptItemFunction {}
}
