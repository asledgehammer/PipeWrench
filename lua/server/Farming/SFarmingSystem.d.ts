/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Farming {
    /** @customConstructor SFarmingSystem:new */
    export class SFarmingSystem extends lua.server.Map.SGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      hourElapsedForWater: any;

      hoursElapsed: any;

      previousHour: any;

      previousHourHealth: any;

      constructor();

      changeHealth(...__args: never[]): any;

      changePlayer(player: any, ...__args: never[]): any;

      checkPlant(...__args: never[]): any;

      checkPlant2(luaObject: any, ...__args: never[]): any;

      checkPlantSquare(luaObject: any, ...__args: never[]): any;

      checkWater(luaObject: any, ...__args: never[]): any;

      convertOldModData(...__args: never[]): any;

      destroyOnWalk(luaObject: any, square: any, ...__args: never[]): any;

      diseaseClosePlant(luaObject: any, aphidsBane: any, fliesBane: any, slugsBane: any, ...__args: never[]): any;

      diseaseThis(luaObject: any, ...__args: never[]): any;

      EveryTenMinutes(...__args: never[]): any;

      gainXp(player: any, luaObject: any, ...__args: never[]): any;

      getHealth(...__args: never[]): any;

      growPlant(luaObject: any, nextGrowing: any, updateNbOfGrow: any, ...__args: never[]): any;

      harvest(luaObject: any, player: any, ...__args: never[]): any;

      hasWeeds(square: any, ...__args: never[]): any;

      hasWeeds2(v: any, ...__args: never[]): any;

      isValidModData(modData: any, ...__args: never[]): any;

      lowerWaterLvlAndUpDisease(...__args: never[]): any;

      plow(square: any, ...__args: never[]): any;

      plowFadeCheck(luaObject: any, ...__args: never[]): any;

      receiveCommand(playerObj: any, command: any, args: any, ...__args: never[]): any;

      removePlant(luaObject: any, ...__args: never[]): any;

      removeTallGrass(sq: any, ...__args: never[]): any;

      /** @noSelf */
      static destroyPlant: (square: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Farming.SFarmingSystem {}
}
