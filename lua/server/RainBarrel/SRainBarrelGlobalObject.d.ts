/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.RainBarrel {
    /** @customConstructor SRainBarrelGlobalObject:new */
    export class SRainBarrelGlobalObject extends lua.server.Map.SGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      exterior: any;

      taintedWater: any;

      waterAmount: any;

      waterMax: any;

      constructor(luaSystem: any, globalObject: any);

      changeSprite: (() => any) | any;
    }
  }
  export namespace lua.server.RainBarrel.SRainBarrelGlobalObject {}
}
