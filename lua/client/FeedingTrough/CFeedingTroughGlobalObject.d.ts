/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.FeedingTrough {
    /** @customConstructor CFeedingTroughGlobalObject:new */
    export class CFeedingTroughGlobalObject extends lua.client.Map.CGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      constructor(luaSystem: any, globalObject: any);

      OnLuaObjectUpdated(...__args: never[]): any;
    }
  }
  export namespace lua.client.FeedingTrough.CFeedingTroughGlobalObject {}
}
