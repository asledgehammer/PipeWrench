/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Moveables {
    export abstract class ISMoveableDefinitions {
      static [id: string]: any;

      getInstance: (() => any) | any;

      /** @noSelf */
      static load: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.Moveables.ISMoveableDefinitions {}
}
