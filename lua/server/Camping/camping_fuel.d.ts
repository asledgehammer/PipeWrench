/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Camping {
    export abstract class campingFuelCategory {
      static [id: string]: any;
    }

    export abstract class campingFuelType {
      static [id: string]: any;
    }

    export abstract class campingLightFireCategory {
      static [id: string]: any;
    }

    export abstract class campingLightFireType {
      static [id: string]: any;
    }
  }
  export namespace lua.server.Camping.camping_fuel {}
}
