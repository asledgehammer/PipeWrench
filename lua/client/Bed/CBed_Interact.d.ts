/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Bed {
    export abstract class CBed_Interact {
      static [id: string]: any;

      /** @noSelf */
      static LookForBed: (sq: any, ...__args: never[]) => any;

      /** @noSelf */
      static onContextKey: (playerObj: any, timePressedContext: any, ...__args: never[]) => any;

      /** @noSelf */
      static trySquareForBed: (playerObj: any, sq: any, ...__args: never[]) => any;

      /** @noSelf */
      static trySquareInDirection: (playerObj: any, dir: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Bed.CBed_Interact {}
}
