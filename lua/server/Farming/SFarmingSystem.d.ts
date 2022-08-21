/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      changeHealth: (() => any) | any;

      checkPlant: (() => any) | any;

      convertOldModData: (() => any) | any;

      destroyOnWalk: ((luaObject: any) => any) | any;

      diseaseClosePlant: ((luaObject: any) => any) | any;

      diseaseThis: ((luaObject: any, checkClosePlant: any) => any) | any;

      EveryTenMinutes: (() => any) | any;

      getHealth: (() => any) | any;

      growPlant: ((luaObject: any, nextGrowing: any, updateNbOfGrow: any) => any) | any;

      harvest: ((luaObject: any, player: any) => any) | any;

      isValidModData: ((modData: any) => any) | any;

      lowerWaterLvlAndUpDisease: (() => any) | any;

      plow: ((square: any) => any) | any;

      receiveCommand: ((playerObj: any, command: any, args: any) => any) | any;

      removePlant: ((luaObject: any) => any) | any;

      removeTallGrass: ((sq: any) => any) | any;
    }
  }
  export namespace lua.server.Farming.SFarmingSystem {}
}
