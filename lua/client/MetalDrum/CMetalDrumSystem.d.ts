/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.MetalDrum {
    /** @customConstructor CMetalDrumSystem:new */
    export class CMetalDrumSystem extends lua.client.Map.CGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      constructor();
    }
  }
  export namespace lua.client.MetalDrum.CMetalDrumSystem {}
}
