/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.BuildingObjects.ISUI {
    export abstract class ISBuildMenu {
      static [id: string]: any;

      static cheat: any;

      /** @noSelf */
      static addToolTip: (...__args: never[]) => any;

      /** @noSelf */
      static buildBarMenu: (subMenu: any, option: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static buildContainerMenu: (subMenu: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static buildDoorFrameMenu: (subMenu: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static buildDoorMenu: (subMenu: any, option: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static buildFenceMenu: (subMenu: any, option: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static buildFloorMenu: (subMenu: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static buildFurnitureMenu: (subMenu: any, context: any, option: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static buildLightMenu: (subMenu: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static buildMiscMenu: (subMenu: any, option: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static buildStairsMenu: (subMenu: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static buildWallMenu: (subMenu: any, option: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static buildWindowsFrameMenu: (subMenu: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static canBuild: (
        plankNb: any,
        nailsNb: any,
        hingeNb: any,
        doorknobNb: any,
        baredWireNb: any,
        carpentrySkill: any,
        option: any,
        player: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static canBuildLogWall: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static canDoStage: (player: any, stage: any, ...__args: never[]) => any;

      /** @noSelf */
      static countMaterial: (player: any, fullType: any, ...__args: never[]) => any;

      /** @noSelf */
      static doBuildMenu: (player: any, context: any, worldobjects: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static getBarCornerSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getBarElementSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getBedSprite: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getBookcaseSprite: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getDoubleShelveSprite: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetItemInstance: (type: any, ...__args: never[]) => any;

      /** @noSelf */
      static getLargeWoodTableSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getPillarLampSprite: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getShelveSprite: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getSignSprite: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getSmallBookcaseSprite: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getSpriteLvl: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getTableWithDrawerSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWoodenChairSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWoodenCrateSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWoodenDoorFrameSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWoodenDoorSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWoodenFenceSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWoodenFloorSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWoodenTableSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWoodenWallFrameSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWoodenWallSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWoodenWindowsFrameSprites: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static haveSomethingtoBuild: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static isMultiStageValid: (...__args: never[]) => any;

      /** @noSelf */
      static isNailsBoxNeededOpening: (nailsRequired: any, ...__args: never[]) => any;

      /** @noSelf */
      static onBarbedFence: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onBarElement: (worldobjects: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onBed: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onBookcase: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onBrownWoodenStairs: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCompost: (worldobjects: any, player: any, sprite: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCreateBarrel: (worldobjects: any, player: any, sprite: any, waterMax: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDarkWoodenStairs: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDismantle: (worldobjects: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDoubleShelve: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDoubleWoodenDoor: (
        worldobjects: any,
        square: any,
        sprite: any,
        spriteIndex: any,
        player: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onFarmDoor: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGravelBagWall: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onLargeWoodTable: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onLightBrownWoodenStairs: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onLogWall: (worldobjects: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMultiStageBuild: (worldobjects: any, stage: any, item: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMultiStageBuildSelected: (cursor: any, square: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPillarLamp: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSangBagWall: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onShelve: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSign: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSmallBookcase: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSmallWoodTable: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSmallWoodTableWithDrawer: (
        worldobjects: any,
        square: any,
        sprite: any,
        player: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onStonePile: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodChair: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenBrownFloor: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenCrate: (worldobjects: any, square: any, crateSprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenCross: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenDoor: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenDoorFrame: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenFence: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenFenceStake: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenFloor: (worldobjects: any, square: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenLightBrownFloor: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenPicket: (worldobjects: any, square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenPillar: (worldobjects: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenWall: (worldobjects: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenWallFrame: (worldobjects: any, sprite: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWoodenWindowsFrame: (
        worldobjects: any,
        square: any,
        sprite: any,
        player: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static requireHammer: (option: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.BuildingObjects.ISUI.ISBuildMenu {}
}
