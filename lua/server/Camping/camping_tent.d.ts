/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Camping {
    export abstract class camping {
      static [id: string]: any;

      /** @noSelf */
      static addTent: (grid: any, sprite: any) => any;

      /** @noSelf */
      static destroyTent: (tent: any) => any;

      /** @noSelf */
      static findTentObject: (square: any) => any;

      /** @noSelf */
      static findTentSprites: (sprite: any) => any;

      /** @noSelf */
      static getCurrentTent: (grid: any) => any;

      /** @noSelf */
      static getTentObjects: (tent: any) => any;

      /** @noSelf */
      static isTentObject: (object: any) => any;

      /** @noSelf */
      static removeTent: (tent: any) => any;

      /** @noSelf */
      static tentAt: (x: any, y: any, z: any) => any;
    }
  }
  export namespace lua.server.Camping.camping_tent {}
}
