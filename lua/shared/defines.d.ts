/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared {
    export abstract class ZombiePopulationMultiplier {
      static [id: string]: any;
    }

    export abstract class ZombiePopulationMultiplierTable {
      static [id: string]: any;
    }

    export abstract class ZombiePopulationPeakMultiplier {
      static [id: string]: any;
    }

    export abstract class ZombiePopulationStartMultiplier {
      static [id: string]: any;
    }

    export abstract class ZomboidGlobals {
      static [id: string]: any;
    }
  }
  export namespace lua.shared.defines {}
}
