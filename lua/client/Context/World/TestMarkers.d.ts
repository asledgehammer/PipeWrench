/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Context.World {
    export abstract class TestMarkers {
      static [id: string]: any;

      /** @noSelf */
      static add: (_circle: any, _pointer: any, ...__args: never[]) => any;

      /** @noSelf */
      static enableCurrent: (...__args: never[]) => any;

      /** @noSelf */
      static ontick: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.Context.World.TestMarkers {}
}
