/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Camping {
    /** @customConstructor CCampfireGlobalObject:new */
    export class CCampfireGlobalObject extends lua.client.Map.CGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      constructor(luaSystem: any, globalObject: any);

      getObject: (() => any) | any;
    }
  }
  export namespace lua.client.Camping.CCampfireGlobalObject {}
}
