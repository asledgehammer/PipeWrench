/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.TurnBased {
    export abstract class TurnbasedDummyChr {
      static [id: string]: any;
    }
  }
  export namespace lua.server.TurnBased.TurnBasedMain {
    /** @noSelf */
    export const InitTurnbasedEngine: () => any;

    /** @noSelf */
    export const PrepareTurnbasedEngine: () => any;
  }
}
