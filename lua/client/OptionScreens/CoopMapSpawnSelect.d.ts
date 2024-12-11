/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CoopMapSpawnSelect:new */
    export class CoopMapSpawnSelect extends lua.client.OptionScreens.MapSpawnSelect {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      canRespawnWithOther(...__args: never[]): any;

      canRespawnWithSelf(...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.CoopMapSpawnSelect {}
}
