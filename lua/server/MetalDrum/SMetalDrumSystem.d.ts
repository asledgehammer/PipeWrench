/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.MetalDrum {
    /** @customConstructor SMetalDrumSystem:new */
    export class SMetalDrumSystem extends lua.server.Map.SGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      checkRain: (() => any) | any;

      convertOldModData: (() => any) | any;
    }
  }
  export namespace lua.server.MetalDrum.SMetalDrumSystem {}
}
