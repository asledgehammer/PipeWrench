/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
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

      addIcon(...__args: never[]): any;

      addObject(...__args: never[]): any;

      aphid(...__args: never[]): any;

      canHarvest(...__args: never[]): any;

      checkStat(...__args: never[]): any;

      cureFlies(fliesCureSource: any, uses: any, ...__args: never[]): any;

      cureMildew(mildewCureSource: any, uses: any, ...__args: never[]): any;

      deadPlant(...__args: never[]): any;

      destroyThis(...__args: never[]): any;

      dryThis(...__args: never[]): any;

      fertilize(fertilizer: any, ...__args: never[]): any;

      flies(...__args: never[]): any;

      fromModData(modData: any, ...__args: never[]): any;

      fromObject(object: any, ...__args: never[]): any;

      getObject(...__args: never[]): any;

      isAlive(...__args: never[]): any;

      loadGridSquare(...__args: never[]): any;

      lowerWaterLvl(plant: any, ...__args: never[]): any;

      mildew(...__args: never[]): any;

      removeObject(...__args: never[]): any;

      rottenThis(...__args: never[]): any;

      saveData(...__args: never[]): any;

      seed(typeOfSeed: any, ...__args: never[]): any;

      setObjectName(objectName: any, ...__args: never[]): any;

      setSpriteName(spriteName: any, ...__args: never[]): any;

      toModData(modData: any, ...__args: never[]): any;

      upDisease(...__args: never[]): any;

      water(waterSource: any, uses: any, ...__args: never[]): any;

      /** @noSelf */
      static initModData: (modData: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Farming.SPlantGlobalObject {}
}
