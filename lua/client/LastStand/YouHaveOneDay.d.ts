/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.LastStand {
    export abstract class YouHaveOneDay {
      static [id: string]: any;

      /** @noSelf */
      static Add: () => any;

      /** @noSelf */
      static AddPlayer: (playerNum: any, playerObj: any) => any;

      /** @noSelf */
      static EveryDays: () => any;

      /** @noSelf */
      static EveryHours: () => any;

      /** @noSelf */
      static Init: () => any;

      /** @noSelf */
      static OnGameStart: () => any;

      /** @noSelf */
      static OnInitWorld: () => any;

      /** @noSelf */
      static OnPlayerUpdate: (zombie: any) => any;

      /** @noSelf */
      static OnZombieUpdate: (zombie: any) => any;

      /** @noSelf */
      static RemovePlayer: (playerObj: any) => any;

      /** @noSelf */
      static Render: () => any;
    }
  }
  export namespace lua.client.LastStand.YouHaveOneDay {}
}
