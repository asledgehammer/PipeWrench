/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Farming {
    /** @customConstructor CPlantGlobalObject:new */
    export class CPlantGlobalObject extends lua.client.Map.CGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      constructor(luaSystem: any, globalObject: any);

      canHarvest: (() => any) | any;

      getObject: (() => any) | any;

      isAlive: (() => any) | any;
    }
  }
  export namespace lua.client.Farming.CPlantGlobalObject {}
}
