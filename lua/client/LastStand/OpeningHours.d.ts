/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.LastStand {
    export abstract class OpeningHours {
      static [id: string]: any;

      /** @noSelf */
      static Add: (...__args: never[]) => any;

      /** @noSelf */
      static AddPlayer: (playerNum: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static CheckHordeSpawn: (
        regionName: any,
        regionSpawn: any,
        regionSpawnX: any,
        regionSpawnY: any,
        regionSpawnZ: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static CheckMetalGates: (area: any, ...__args: never[]) => any;

      /** @noSelf */
      static EveryDays: (...__args: never[]) => any;

      /** @noSelf */
      static EveryTenMinutes: (...__args: never[]) => any;

      /** @noSelf */
      static OnGameStart: (...__args: never[]) => any;

      /** @noSelf */
      static OnInitWorld: (...__args: never[]) => any;

      /** @noSelf */
      static OnPlayerUpdate: (...__args: never[]) => any;

      /** @noSelf */
      static RemovePlayer: (p: any, ...__args: never[]) => any;

      /** @noSelf */
      static Render: (...__args: never[]) => any;

      /** @noSelf */
      static ResetMetalGates: (area: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.LastStand.OpeningHours {}
}
