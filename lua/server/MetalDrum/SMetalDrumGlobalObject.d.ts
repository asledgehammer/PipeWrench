/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.MetalDrum {
    /** @customConstructor SMetalDrumGlobalObject:new */
    export class SMetalDrumGlobalObject extends lua.server.Map.SGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      charcoalTick: any;

      exterior: any;

      haveCharcoal: any;

      haveLogs: any;

      isLit: any;

      LightSource: any;

      taintedWater: any;

      waterAmount: any;

      waterMax: any;

      constructor(luaSystem: any, globalObject: any);

      changeSprite(...__args: never[]): any;

      getSprites(...__args: never[]): any;

      setHaveCharcoal(haveCharcoal: any, ...__args: never[]): any;

      setHaveLogs(haveLogs: any, ...__args: never[]): any;

      setLit(isLit: any, ...__args: never[]): any;

      setModData(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.server.MetalDrum.SMetalDrumGlobalObject {}
}
