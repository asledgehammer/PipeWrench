/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Items {
    export abstract class AcceptItemFunction {
      static [id: string]: any;

      /** @noSelf */
      static AmmoStrap_Bullets: (container: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static AmmoStrap_Shells: (container: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static FirstAidKit: (container: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static HolsterShoulder: (container: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static KeyRing: (container: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static Wallet: (container: any, item: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Items.AcceptItemFunction {}
}
