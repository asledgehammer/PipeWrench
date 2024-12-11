/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.LastStand {
    export abstract class InsomniaChallenge {
      static [id: string]: any;

      /** @noSelf */
      static Add: (...__args: never[]) => any;

      /** @noSelf */
      static AddPlayer: (playerNum: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static Init: (...__args: never[]) => any;

      /** @noSelf */
      static onBackButtonWheel: (playerNum: any, dir: any, ...__args: never[]) => any;

      /** @noSelf */
      static PreloadInit: (...__args: never[]) => any;

      /** @noSelf */
      static RemovePlayer: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static Render: (...__args: never[]) => any;

      /** @noSelf */
      static Tick: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.LastStand.Insomnia {
    /** @noSelf */
    export const injectInsomnia: () => any;

    /** @noSelf */
    export const removeInsomnia: () => any;
  }
}
