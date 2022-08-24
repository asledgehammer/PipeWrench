/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      changeSprite: (() => any) | any;

      getSprites: (() => any) | any;

      setHaveCharcoal: ((haveCharcoal: any) => any) | any;

      setHaveLogs: ((haveLogs: any) => any) | any;

      setLit: ((isLit: any) => any) | any;

      setModData: (() => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.server.MetalDrum.SMetalDrumGlobalObject {}
}
