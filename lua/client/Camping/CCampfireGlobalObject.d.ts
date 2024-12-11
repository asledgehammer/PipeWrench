/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Camping {
    /** @customConstructor CCampfireGlobalObject:new */
    export class CCampfireGlobalObject extends lua.client.Map.CGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      constructor(luaSystem: any, globalObject: any);

      getObject(...__args: never[]): any;
    }
  }
  export namespace lua.client.Camping.CCampfireGlobalObject {}
}
