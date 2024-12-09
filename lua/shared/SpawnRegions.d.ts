/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared {
    export abstract class SpawnRegionMgr {
      static [id: string]: any;

      /** @noSelf */
      static getSpawnRegions: (...__args: never[]) => any;

      /** @noSelf */
      static getSpawnRegionsAux: (...__args: never[]) => any;

      /** @noSelf */
      static loadSpawnPointsFile: (filename: any, server: any, ...__args: never[]) => any;

      /** @noSelf */
      static loadSpawnRegions: (regions: any, ...__args: never[]) => any;

      /** @noSelf */
      static loadSpawnRegionsFile: (filename: any, server: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.SpawnRegions {}
}
