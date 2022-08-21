/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Tutorial {
    export abstract class TutorialData {
      static [id: string]: any;
    }
  }
  export namespace lua.client.Tutorial.TutorialSetup {
    /** @noSelf */
    export const doTutorialDraw: () => any;

    /** @noSelf */
    export const doTutorialInit: () => any;

    /** @noSelf */
    export const preLoadTutorialInit: () => any;
  }
}
