/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Traps {
    /** @customConstructor STrapGlobalObject:new */
    export class STrapGlobalObject extends lua.server.Map.SGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      animalHour: any;

      bait: any;

      baitAmountMulti: any;

      closedSprite: any;

      def: any;

      destroyed: any;

      lastUpdate: any;

      openSprite: any;

      player: any;

      trapBait: any;

      trapBaitDay: any;

      trappingSkill: any;

      trapType: any;

      zone: any;

      constructor(luaSystem: any, globalObject: any);

      addBait: ((bait: any, age: any, baitAmountMulti: any, player: any) => any) | any;

      addSound: ((square: any) => any) | any;

      calculTrap: ((square: any) => any) | any;

      checkBaitFreshness: (() => any) | any;

      checkDestroy: ((square: any) => any) | any;

      checkForAnimal: ((square: any) => any) | any;

      checkForWallExploit: ((square: any) => any) | any;

      checkTime: ((animal: any) => any) | any;

      fromModData: ((modData: any) => any) | any;

      isMetalTrap: (() => any) | any;

      isWoodenTrap: (() => any) | any;

      reinitModData: ((square: any) => any) | any;

      removeAnimal: ((character: any) => any) | any;

      removeBait: ((character: any) => any) | any;

      sendSound: ((soundName: any, square: any) => any) | any;

      setAnimal: ((animal: any) => any) | any;

      setDef: (() => any) | any;

      spawnDestroyItems: ((square: any, object: any) => any) | any;

      toModData: ((modData: any) => any) | any;

      toObject: ((object: any, transmitData: any) => any) | any;

      /** @noSelf */
      static SpawnDestroyItems: (trapType: any, square: any, object: any) => any;
    }
  }
  export namespace lua.server.Traps.STrapGlobalObject {}
}
