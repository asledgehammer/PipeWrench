/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Traps {
    /** @customConstructor CTrapGlobalObject:new */
    export class CTrapGlobalObject extends lua.client.Map.CGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      bait: any;

      constructor(luaSystem: any, globalObject: any);

      checkForWallExploit: ((square: any) => any) | any;
    }
  }
  export namespace lua.client.Traps.CTrapGlobalObject {}
}
