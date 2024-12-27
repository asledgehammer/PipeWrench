/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Animals {
    export abstract class CAnimals_Interact {
      static [id: string]: any;

      /** @noSelf */
      static onKeyPress: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Animals.CAnimals_Interact {}
}
