/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.MetalDrum {
    /** @customConstructor CMetalDrumGlobalObject:new */
    export class CMetalDrumGlobalObject extends lua.client.Map.CGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      constructor(luaSystem: any, globalObject: any);

      getObject: (() => any) | any;
    }
  }
  export namespace lua.client.MetalDrum.CMetalDrumGlobalObject {}
}
