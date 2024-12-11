/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.LastStand {
    export abstract class YouHaveOneDay {
      static [id: string]: any;

      /** @noSelf */
      static Add: (...__args: never[]) => any;

      /** @noSelf */
      static AddPlayer: (playerNum: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static EveryDays: (...__args: never[]) => any;

      /** @noSelf */
      static EveryHours: (...__args: never[]) => any;

      /** @noSelf */
      static Init: (...__args: never[]) => any;

      /** @noSelf */
      static OnGameStart: (...__args: never[]) => any;

      /** @noSelf */
      static OnInitWorld: (...__args: never[]) => any;

      /** @noSelf */
      static OnPlayerUpdate: (zombie: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnZombieUpdate: (zombie: any, ...__args: never[]) => any;

      /** @noSelf */
      static RemovePlayer: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static Render: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.LastStand.YouHaveOneDay {}
}
