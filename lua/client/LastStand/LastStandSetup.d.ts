/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.LastStand {
    export abstract class LastStandData {
      static [id: string]: any;

      static chosenChallenge: any;

      /** @noSelf */
      static getSpawnRegion: () => any;
    }
  }
  export namespace lua.client.LastStand.LastStandSetup {
    /** @noSelf */
    export const doLastStandDraw: () => any;

    /** @noSelf */
    export const doLastStandInit: () => any;

    /** @noSelf */
    export const preLoadLastStandInit: () => any;
  }
}
