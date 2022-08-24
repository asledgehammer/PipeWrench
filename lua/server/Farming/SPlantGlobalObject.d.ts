/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Farming {
    /** @customConstructor SPlantGlobalObject:new */
    export class SPlantGlobalObject extends lua.server.Map.SGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      aphidLvl: any;

      badCare: any;

      exterior: any;

      fertilizer: any;

      fliesLvl: any;

      hasSeed: any;

      hasVegetable: any;

      health: any;

      lastWaterHour: any;

      mildewLvl: any;

      nbOfGrow: any;

      nextGrowing: any;

      objectName: any;

      spriteName: any;

      state: any;

      typeOfSeed: any;

      waterLvl: any;

      waterNeeded: any;

      waterNeededMax: any;

      constructor(luaSystem: any, globalObject: any);

      addIcon: (() => any) | any;

      addObject: (() => any) | any;

      aphid: (() => any) | any;

      canHarvest: (() => any) | any;

      checkStat: (() => any) | any;

      cureFlies: ((fliesCureSource: any, uses: any) => any) | any;

      cureMildew: ((mildewCureSource: any, uses: any) => any) | any;

      deadPlant: (() => any) | any;

      destroyThis: (() => any) | any;

      dryThis: (() => any) | any;

      fertilize: ((fertilizer: any) => any) | any;

      flies: (() => any) | any;

      fromModData: ((modData: any) => any) | any;

      fromObject: ((object: any) => any) | any;

      getObject: (() => any) | any;

      isAlive: (() => any) | any;

      loadGridSquare: (() => any) | any;

      lowerWaterLvl: ((plant: any) => any) | any;

      mildew: (() => any) | any;

      removeObject: (() => any) | any;

      rottenThis: (() => any) | any;

      saveData: (() => any) | any;

      seed: ((typeOfSeed: any) => any) | any;

      setObjectName: ((objectName: any) => any) | any;

      setSpriteName: ((spriteName: any) => any) | any;

      toModData: ((modData: any) => any) | any;

      upDisease: (() => any) | any;

      water: ((waterSource: any, uses: any) => any) | any;

      /** @noSelf */
      static initModData: (modData: any) => any;
    }
  }
  export namespace lua.server.Farming.SPlantGlobalObject {}
}
