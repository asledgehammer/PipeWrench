/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.LastStand {
    export abstract class InsomniaChallenge {
      static [id: string]: any;

      /** @noSelf */
      static Add: () => any;

      /** @noSelf */
      static AddPlayer: (playerNum: any, playerObj: any) => any;

      /** @noSelf */
      static Init: () => any;

      /** @noSelf */
      static onBackButtonWheel: (playerNum: any, dir: any) => any;

      /** @noSelf */
      static PreloadInit: () => any;

      /** @noSelf */
      static RemovePlayer: (playerObj: any) => any;

      /** @noSelf */
      static Render: () => any;

      /** @noSelf */
      static Tick: () => any;
    }
  }
  export namespace lua.client.LastStand.Insomnia {
    /** @noSelf */
    export const injectInsomnia: () => any;

    /** @noSelf */
    export const removeInsomnia: () => any;
  }
}
