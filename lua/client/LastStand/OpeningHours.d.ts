/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.LastStand {
    export abstract class OpeningHours {
      static [id: string]: any;

      /** @noSelf */
      static Add: () => any;

      /** @noSelf */
      static AddPlayer: (playerNum: any, playerObj: any) => any;

      /** @noSelf */
      static CheckHordeSpawn: (
        regionName: any,
        regionSpawn: any,
        regionSpawnX: any,
        regionSpawnY: any,
        regionSpawnZ: any
      ) => any;

      /** @noSelf */
      static CheckMetalGates: (area: any) => any;

      /** @noSelf */
      static EveryDays: () => any;

      /** @noSelf */
      static EveryTenMinutes: () => any;

      /** @noSelf */
      static OnGameStart: () => any;

      /** @noSelf */
      static OnInitWorld: () => any;

      /** @noSelf */
      static OnPlayerUpdate: () => any;

      /** @noSelf */
      static RemovePlayer: (p: any) => any;

      /** @noSelf */
      static Render: () => any;

      /** @noSelf */
      static ResetMetalGates: (area: any) => any;
    }
  }
  export namespace lua.client.LastStand.OpeningHours {}
}
