/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Farming {
    /** @customConstructor CPlantGlobalObject:new */
    export class CPlantGlobalObject extends lua.client.Map.CGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      constructor(luaSystem: any, globalObject: any);

      canHarvest(...__args: never[]): any;

      getObject(...__args: never[]): any;

      isAlive(...__args: never[]): any;

      isBadMonth(...__args: never[]): any;
    }
  }
  export namespace lua.client.Farming.CPlantGlobalObject {}
}
