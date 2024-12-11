/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.FireFighting {
    export abstract class FireFighting {
      static [id: string]: any;

      /** @noSelf */
      static getExtinguisher: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static getExtinguisherUses: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static getSquareToExtinguish: (square: any, ...__args: never[]) => any;

      /** @noSelf */
      static isExtinguisher: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static isSquareToExtinguish: (square: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.FireFighting.FireFighting {}
}
