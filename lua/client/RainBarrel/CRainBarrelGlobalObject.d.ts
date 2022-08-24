/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RainBarrel {
    /** @customConstructor CRainBarrelGlobalObject:new */
    export class CRainBarrelGlobalObject extends lua.client.Map.CGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      constructor(luaSystem: any, globalObject: any);

      getObject: (() => any) | any;
    }
  }
  export namespace lua.client.RainBarrel.CRainBarrelGlobalObject {}
}
