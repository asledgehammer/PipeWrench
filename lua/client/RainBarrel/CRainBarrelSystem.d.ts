/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RainBarrel {
    /** @customConstructor CRainBarrelSystem:new */
    export class CRainBarrelSystem extends lua.client.Map.CGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      constructor();
    }
  }
  export namespace lua.client.RainBarrel.CRainBarrelSystem {}
}
