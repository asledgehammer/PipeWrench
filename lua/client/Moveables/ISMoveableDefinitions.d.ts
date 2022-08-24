/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Moveables {
    export abstract class ISMoveableDefinitions {
      static [id: string]: any;

      getInstance: (() => any) | any;

      /** @noSelf */
      static load: () => any;
    }
  }
  export namespace lua.client.Moveables.ISMoveableDefinitions {}
}
