/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Map {
    /** @customConstructor SGlobalObject:new */
    export class SGlobalObject extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      globalObject: any;

      luaSystem: any;

      x: any;

      y: any;

      z: any;

      constructor(luaSystem: any, globalObject: any);

      aboutToRemoveFromSystem: (() => any) | any;

      getIsoObject: (() => any) | any;

      getSquare: (() => any) | any;

      initNew: (() => any) | any;

      noise: ((message: any) => any) | any;

      OnIsoObjectChangedItself: ((isoObject: any) => any) | any;

      removeIsoObject: (() => any) | any;

      stateFromIsoObject: ((isoObject: any) => any) | any;

      stateToIsoObject: ((isoObject: any) => any) | any;
    }
  }
  export namespace lua.server.Map.SGlobalObject {}
}
