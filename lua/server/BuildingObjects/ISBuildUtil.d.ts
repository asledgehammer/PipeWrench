/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    export abstract class buildUtil {
      static [id: string]: any;

      /** @noSelf */
      static addCorner: (x: any, y: any, z: any, thumpable: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static addWoodXp: (ISItem: any, ...__args: never[]) => any;

      /** @noSelf */
      static canBePlace: (ISItem: any, square: any, ...__args: never[]) => any;

      /** @noSelf */
      static checkCorner: (x: any, y: any, z: any, north: any, thumpable: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static checkMaterialOnGround: (squareToCheck: any, ...__args: never[]) => any;

      /** @noSelf */
      static consumeMaterial: (ISItem: any, ...__args: never[]) => any;

      /** @noSelf */
      static getDoubleDoorObjects: (object: any, ...__args: never[]) => any;

      /** @noSelf */
      static getGarageDoorObjects: (object: any, ...__args: never[]) => any;

      /** @noSelf */
      static getGraveObjects: (object: any, ...__args: never[]) => any;

      /** @noSelf */
      static getMaterialOnGround: (squareToCheck: any, ...__args: never[]) => any;

      /** @noSelf */
      static getMaterialOnGroundCounts: (itemMap: any, ...__args: never[]) => any;

      /** @noSelf */
      static getMaterialOnGroundUses: (itemMap: any, ...__args: never[]) => any;

      /** @noSelf */
      static getStairObjects: (object: any, skipFloor: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWoodHealth: (ISItem: any, ...__args: never[]) => any;

      /** @noSelf */
      static openNailsBox: (ISItem: any, ...__args: never[]) => any;

      /** @noSelf */
      static predicateMaterial: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static removeFromGround: (square: any, ...__args: never[]) => any;

      /** @noSelf */
      static setHaveConstruction: (_square: any, _hasConstruction: any, ...__args: never[]) => any;

      /** @noSelf */
      static setInfo: (javaObject: any, ISItem: any, ...__args: never[]) => any;

      /** @noSelf */
      static stairIsBlockingPlacement: (_square: any, _doAdjacent: any, _north: any, ...__args: never[]) => any;

      /** @noSelf */
      static useDrainable: (item: any, uses: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBuildUtil {}
}
