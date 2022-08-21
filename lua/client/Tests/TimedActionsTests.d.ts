/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Tests {
    export abstract class TimedActionTests {
      static [id: string]: any;

      /** @noSelf */
      static runAll: () => any;

      /** @noSelf */
      static runOne: (name: any) => any;

      /** @noSelf */
      static stop: () => any;
    }
  }
  export namespace lua.client.Tests.TimedActionsTests {}
}
