/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.MetalDrum {
    /** @customConstructor CMetalDrumGlobalObject:new */
    export class CMetalDrumGlobalObject extends lua.client.Map.CGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      constructor(luaSystem: any, globalObject: any);

      getObject(...__args: never[]): any;
    }
  }
  export namespace lua.client.MetalDrum.CMetalDrumGlobalObject {}
}
