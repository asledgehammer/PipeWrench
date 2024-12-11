/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.LastStand {
    export abstract class Challenge2 {
      static [id: string]: any;

      /** @noSelf */
      static Add: (...__args: never[]) => any;

      /** @noSelf */
      static AddPlayer: (playerNum: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static endWave: (...__args: never[]) => any;

      /** @noSelf */
      static Init: (...__args: never[]) => any;

      /** @noSelf */
      static onBackButtonWheel: (playerNum: any, dir: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCreatePlayer: (playerId: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnInitWorld: (...__args: never[]) => any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onZombieDead: (...__args: never[]) => any;

      /** @noSelf */
      static RemovePlayer: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static Render: (...__args: never[]) => any;

      /** @noSelf */
      static SpawnZombies: (count: any, ...__args: never[]) => any;

      /** @noSelf */
      static Tick: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.LastStand.Challenge2 {}
}
