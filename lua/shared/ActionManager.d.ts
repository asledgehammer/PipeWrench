/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared {
    export abstract class Actions {
      static [id: string]: any;

      /** @noSelf */
      static addOrDropItem: (character: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static build: (character: any, args: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.ActionManager {}
}
