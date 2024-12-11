/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Tests {
    export abstract class TimedActionTests {
      static [id: string]: any;

      /** @noSelf */
      static runAll: (...__args: never[]) => any;

      /** @noSelf */
      static runOne: (name: any, ...__args: never[]) => any;

      /** @noSelf */
      static stop: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.Tests.TimedActionsTests {}
}
