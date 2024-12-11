/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Camping {
    export abstract class camping {
      static [id: string]: any;

      /** @noSelf */
      static addTent: (grid: any, sprite: any, ...__args: never[]) => any;

      /** @noSelf */
      static destroyTent: (tent: any, ...__args: never[]) => any;

      /** @noSelf */
      static findTentObject: (square: any, ...__args: never[]) => any;

      /** @noSelf */
      static findTentSprites: (sprite: any, ...__args: never[]) => any;

      /** @noSelf */
      static getCurrentTent: (grid: any, ...__args: never[]) => any;

      /** @noSelf */
      static getTentObjects: (tent: any, ...__args: never[]) => any;

      /** @noSelf */
      static isTentObject: (object: any, ...__args: never[]) => any;

      /** @noSelf */
      static removeTent: (tent: any, ...__args: never[]) => any;

      /** @noSelf */
      static tentAt: (x: any, y: any, z: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Camping.camping_tent {}
}
