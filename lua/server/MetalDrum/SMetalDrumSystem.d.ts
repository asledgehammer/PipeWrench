/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.MetalDrum {
    /** @customConstructor SMetalDrumSystem:new */
    export class SMetalDrumSystem extends lua.server.Map.SGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      checkRain(...__args: never[]): any;

      convertOldModData(...__args: never[]): any;
    }
  }
  export namespace lua.server.MetalDrum.SMetalDrumSystem {}
}
