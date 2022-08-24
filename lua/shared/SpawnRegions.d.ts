/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared {
    export abstract class SpawnRegionMgr {
      static [id: string]: any;

      /** @noSelf */
      static getSpawnRegions: () => any;

      /** @noSelf */
      static getSpawnRegionsAux: () => any;

      /** @noSelf */
      static loadSpawnPointsFile: (filename: any, server: any) => any;

      /** @noSelf */
      static loadSpawnRegions: (regions: any) => any;

      /** @noSelf */
      static loadSpawnRegionsFile: (filename: any, server: any) => any;
    }
  }
  export namespace lua.shared.SpawnRegions {}
}
