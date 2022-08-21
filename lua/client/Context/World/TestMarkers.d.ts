/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Context.World {
    export abstract class TestMarkers {
      static [id: string]: any;

      /** @noSelf */
      static add: (_circle: any, _pointer: any) => any;

      /** @noSelf */
      static enableCurrent: () => any;

      /** @noSelf */
      static ontick: () => any;
    }
  }
  export namespace lua.client.Context.World.TestMarkers {}
}
