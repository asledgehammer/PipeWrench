/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Animals {
    export abstract class CHutch_Interact {
      static [id: string]: any;

      /** @noSelf */
      static onKeyPress: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Animals.CHutch_Interact {}
}
