/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Map {
    /** @customConstructor CGlobalObjectSystem:new */
    export class CGlobalObjectSystem extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      system: any;

      systemName: any;

      wantNoise: any;

      constructor(name: any);

      getIsoObjectAt: ((x: any, y: any, z: any) => any) | any;

      getIsoObjectOnSquare: ((square: any) => any) | any;

      getLuaObjectAt: ((x: any, y: any, z: any) => any) | any;

      getLuaObjectByIndex: ((index: any) => any) | any;

      getLuaObjectCount: (() => any) | any;

      getLuaObjectOnSquare: ((square: any) => any) | any;

      initLuaObjects: (() => any) | any;

      initSystem: (() => any) | any;

      isValidIsoObject: ((isoObject: any) => any) | any;

      newLuaObject: ((globalObject: any) => any) | any;

      newLuaObjectAt: ((x: any, y: any, z: any) => any) | any;

      noise: ((message: any) => any) | any;

      OnLuaObjectUpdated: ((luaObject: any) => any) | any;

      OnServerCommand: ((command: any, args: any) => any) | any;

      removeLuaObject: ((luaObject: any) => any) | any;

      removeLuaObjectAt: ((x: any, y: any, z: any) => any) | any;

      sendCommand: ((playerObj: any, command: any, args: any) => any) | any;

      /** @noSelf */
      static RegisterSystemClass: (luaClass: any) => any;
    }
  }
  export namespace lua.client.Map.CGlobalObjectSystem {}
}
