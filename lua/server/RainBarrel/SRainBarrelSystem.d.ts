/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.RainBarrel {
    /** @customConstructor SRainBarrelSystem:new */
    export class SRainBarrelSystem extends lua.server.Map.SGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      checkRain: (() => any) | any;

      convertOldModData: (() => any) | any;
    }
  }
  export namespace lua.server.RainBarrel.SRainBarrelSystem {}
}
