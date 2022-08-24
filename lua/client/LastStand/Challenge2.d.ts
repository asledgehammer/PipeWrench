/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.LastStand {
    export abstract class Challenge2 {
      static [id: string]: any;

      /** @noSelf */
      static Add: () => any;

      /** @noSelf */
      static AddPlayer: (playerNum: any, playerObj: any) => any;

      /** @noSelf */
      static endWave: () => any;

      /** @noSelf */
      static Init: () => any;

      /** @noSelf */
      static onBackButtonWheel: (playerNum: any, dir: any) => any;

      /** @noSelf */
      static onCreatePlayer: (playerId: any) => any;

      /** @noSelf */
      static OnInitWorld: () => any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;

      /** @noSelf */
      static onZombieDead: () => any;

      /** @noSelf */
      static RemovePlayer: (playerObj: any) => any;

      /** @noSelf */
      static Render: () => any;

      /** @noSelf */
      static SpawnZombies: (count: any) => any;

      /** @noSelf */
      static Tick: () => any;
    }
  }
  export namespace lua.client.LastStand.Challenge2 {}
}
