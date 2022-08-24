/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    export abstract class buildUtil {
      static [id: string]: any;

      /** @noSelf */
      static addCorner: (x: any, y: any, z: any, thumpable: any, item: any) => any;

      /** @noSelf */
      static addWoodXp: (ISItem: any) => any;

      /** @noSelf */
      static canBePlace: (ISItem: any, square: any) => any;

      /** @noSelf */
      static checkCorner: (x: any, y: any, z: any, north: any, thumpable: any, item: any) => any;

      /** @noSelf */
      static checkMaterialOnGround: (squareToCheck: any) => any;

      /** @noSelf */
      static consumeMaterial: (ISItem: any) => any;

      /** @noSelf */
      static getDoubleDoorObjects: (object: any) => any;

      /** @noSelf */
      static getGarageDoorObjects: (object: any) => any;

      /** @noSelf */
      static getGraveObjects: (object: any) => any;

      /** @noSelf */
      static getMaterialOnGround: (squareToCheck: any) => any;

      /** @noSelf */
      static getMaterialOnGroundCounts: (itemMap: any) => any;

      /** @noSelf */
      static getMaterialOnGroundUses: (itemMap: any) => any;

      /** @noSelf */
      static getStairObjects: (object: any) => any;

      /** @noSelf */
      static getWoodHealth: (ISItem: any) => any;

      /** @noSelf */
      static openNailsBox: (ISItem: any) => any;

      /** @noSelf */
      static predicateMaterial: (item: any) => any;

      /** @noSelf */
      static removeFromGround: (square: any) => any;

      /** @noSelf */
      static setHaveConstruction: (_square: any, _hasConstruction: any) => any;

      /** @noSelf */
      static setInfo: (javaObject: any, ISItem: any) => any;

      /** @noSelf */
      static stairIsBlockingPlacement: (_square: any, _doAdjacent: any, _north: any) => any;

      /** @noSelf */
      static useDrainable: (item: any, uses: any) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBuildUtil {}
}
