/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISBuildIsoEntity:new */
    export class ISBuildIsoEntity extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      blockAfterPlace: any;

      bonusHealth: any;

      buildLow: any;

      buildPanelLogic: any;

      character: any;

      corner: any;

      craftRecipe: any;

      dontNeedFrame: any;

      face: any;

      isStairs: any;

      name: any;

      needToBeAgainstWall: any;

      needWindowFrame: any;

      noNeedHammer: any;

      nSpriteCache: any;

      objectInfo: any;

      previousStageObject: any;

      previousStages: any;

      spriteCache: any;

      sq: any;

      tileCheck: any;

      tileSprite: any;

      constructor(character: any, objectInfo: any, buildPanelLogic: any);

      cacheSprites(_face: any, ...__args: never[]): any;

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getFace(...__args: never[]): any;

      getHealth(...__args: never[]): any;

      getOccupiedTiles(square: any, ...__args: never[]): any;

      getOpenFace(_north: any, ...__args: never[]): any;

      isValidPerSquare(
        square: any,
        tileInfo: any,
        _requiresFloor: any,
        _extendsN: any,
        _extendsW: any,
        ...__args: never[]
      ): any;

      setInfo(square: any, north: any, sprite: any, openSprite: any, ...__args: never[]): any;

      /** @noSelf */
      static ConsumeBuildEntityItems: (_info: any, _player: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetAllBuildableEntities: (...__args: never[]) => any;

      /** @noSelf */
      static GetAllGroundItemsForPlayer: (_player: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetBuildableEntities: (_player: any, ...__args: never[]) => any;

      /** @noSelf */
      static predicateMaterial: (item: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBuildIsoEntity {}
}
