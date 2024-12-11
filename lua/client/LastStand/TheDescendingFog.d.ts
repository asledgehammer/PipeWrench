/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.LastStand {
    export abstract class TheDescendingFog {
      static [id: string]: any;

      /** @noSelf */
      static Add: (...__args: never[]) => any;

      /** @noSelf */
      static AddPlayer: (playerNum: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static EveryTenMinutes: (...__args: never[]) => any;

      /** @noSelf */
      static OnGameStart: (...__args: never[]) => any;

      /** @noSelf */
      static OnInitSeasons: (_season: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnInitWorld: (...__args: never[]) => any;

      /** @noSelf */
      static RemovePlayer: (p: any, ...__args: never[]) => any;

      /** @noSelf */
      static Render: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.LastStand.TheDescendingFog {}
}
