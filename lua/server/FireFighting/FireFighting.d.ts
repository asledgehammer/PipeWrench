/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.FireFighting {
    export abstract class FireFighting {
      static [id: string]: any;

      /** @noSelf */
      static getExtinguisher: (playerObj: any) => any;

      /** @noSelf */
      static getExtinguisherUses: (item: any) => any;

      /** @noSelf */
      static getSquareToExtinguish: (square: any) => any;

      /** @noSelf */
      static isExtinguisher: (item: any) => any;

      /** @noSelf */
      static isSquareToExtinguish: (square: any) => any;
    }
  }
  export namespace lua.server.FireFighting.FireFighting {}
}
