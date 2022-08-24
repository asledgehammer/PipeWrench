/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Map {
    /** @customConstructor CGlobalObject:new */
    export class CGlobalObject extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      globalObject: any;

      luaSystem: any;

      x: any;

      y: any;

      z: any;

      constructor(luaSystem: any, globalObject: any);

      fromModData: ((modData: any) => any) | any;

      getIsoObject: (() => any) | any;

      getSquare: (() => any) | any;

      noise: ((message: any) => any) | any;

      updateFromIsoObject: (() => any) | any;
    }
  }
  export namespace lua.client.Map.CGlobalObject {}
}
