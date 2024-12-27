/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Moveables {
    export abstract class ISMoveableDefinitions {
      static [id: string]: any;

      getInstance: (() => any) | any;

      /** @noSelf */
      static load: (...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Moveables.ISMoveableDefinitions {}
}
