/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Map {
    /** @customConstructor SGlobalObjectSystem:new */
    export class SGlobalObjectSystem extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      system: any;

      systemName: any;

      wantNoise: any;

      constructor(name: any);

      getInitialStateForClient: (() => any) | any;

      getIsoObjectAt: ((x: any, y: any, z: any) => any) | any;

      getIsoObjectOnSquare: ((square: any) => any) | any;

      getLuaObjectAt: ((x: any, y: any, z: any) => any) | any;

      getLuaObjectByIndex: ((index: any) => any) | any;

      getLuaObjectCount: (() => any) | any;

      getLuaObjectOnSquare: ((square: any) => any) | any;

      initLuaObjects: (() => any) | any;

      initSystem: (() => any) | any;

      isValidIsoObject: ((isoObject: any) => any) | any;

      loadIsoObject: ((isoObject: any) => any) | any;

      newLuaObject: ((globalObject: any) => any) | any;

      newLuaObjectAt: ((x: any, y: any, z: any) => any) | any;

      newLuaObjectOnClient: ((luaObject: any) => any) | any;

      newLuaObjectOnSquare: ((square: any) => any) | any;

      noise: ((message: any) => any) | any;

      OnChunkLoaded: ((wx: any, wy: any) => any) | any;

      OnClientCommand: ((command: any, playerObj: any, args: any) => any) | any;

      OnDestroyIsoThumpable: ((isoObject: any, playerObj: any) => any) | any;

      OnIsoObjectChangedItself: ((isoObject: any) => any) | any;

      OnObjectAboutToBeRemoved: ((isoObject: any) => any) | any;

      OnObjectAdded: ((isoObject: any) => any) | any;

      removeLuaObject: ((luaObject: any) => any) | any;

      removeLuaObjectAt: ((x: any, y: any, z: any) => any) | any;

      removeLuaObjectOnClient: ((luaObject: any) => any) | any;

      removeLuaObjectOnSquare: ((square: any) => any) | any;

      sendCommand: ((command: any, args: any) => any) | any;

      /** @noSelf */
      static RegisterSystemClass: (luaClass: any) => any;
    }
  }
  export namespace lua.server.Map.SGlobalObjectSystem {}
}
