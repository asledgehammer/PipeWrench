/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CoopMapSpawnSelect:new */
    export class CoopMapSpawnSelect extends lua.client.OptionScreens.MapSpawnSelect {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      canRespawnWithOther: (() => any) | any;

      canRespawnWithSelf: (() => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.CoopMapSpawnSelect {}
}
