/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
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

      addBait(bait: any, age: any, baitAmountMulti: any, player: any, ...__args: never[]): any;

      addSound(square: any, ...__args: never[]): any;

      calculTrap(square: any, ...__args: never[]): any;

      checkBaitFreshness(...__args: never[]): any;

      checkDestroy(square: any, ...__args: never[]): any;

      checkForAnimal(square: any, ...__args: never[]): any;

      checkForWallExploit(square: any, ...__args: never[]): any;

      checkTime(animal: any, ...__args: never[]): any;

      fromModData(modData: any, ...__args: never[]): any;

      isMetalTrap(...__args: never[]): any;

      isWoodenTrap(...__args: never[]): any;

      reinitModData(square: any, ...__args: never[]): any;

      removeAnimal(character: any, ...__args: never[]): any;

      removeBait(character: any, ...__args: never[]): any;

      sendSound(soundName: any, square: any, ...__args: never[]): any;

      setAnimal(animal: any, ...__args: never[]): any;

      setDef(...__args: never[]): any;

      spawnDestroyItems(square: any, object: any, ...__args: never[]): any;

      toModData(modData: any, ...__args: never[]): any;

      toObject(object: any, transmitData: any, ...__args: never[]): any;

      /** @noSelf */
      static SpawnDestroyItems: (trapType: any, square: any, object: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Traps.STrapGlobalObject {}
}
