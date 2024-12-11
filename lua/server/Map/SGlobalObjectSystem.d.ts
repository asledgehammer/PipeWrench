/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Map {
    /** @customConstructor SGlobalObjectSystem:new */
    export class SGlobalObjectSystem extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      system: any;

      systemName: any;

      wantNoise: any;

      constructor(name: any);

      getInitialStateForClient(...__args: never[]): any;

      getIsoObjectAt(x: any, y: any, z: any, ...__args: never[]): any;

      getIsoObjectOnSquare(square: any, ...__args: never[]): any;

      getLuaObjectAt(x: any, y: any, z: any, ...__args: never[]): any;

      getLuaObjectByIndex(index: any, ...__args: never[]): any;

      getLuaObjectCount(...__args: never[]): any;

      getLuaObjectOnSquare(square: any, ...__args: never[]): any;

      initLuaObjects(...__args: never[]): any;

      initSystem(...__args: never[]): any;

      isValidIsoObject(isoObject: any, ...__args: never[]): any;

      loadIsoObject(isoObject: any, ...__args: never[]): any;

      newLuaObject(globalObject: any, ...__args: never[]): any;

      newLuaObjectAt(x: any, y: any, z: any, ...__args: never[]): any;

      newLuaObjectOnClient(luaObject: any, ...__args: never[]): any;

      newLuaObjectOnSquare(square: any, ...__args: never[]): any;

      noise(message: any, ...__args: never[]): any;

      OnChunkLoaded(wx: any, wy: any, ...__args: never[]): any;

      OnClientCommand(command: any, playerObj: any, args: any, ...__args: never[]): any;

      OnDestroyIsoThumpable(isoObject: any, playerObj: any, ...__args: never[]): any;

      OnIsoObjectChangedItself(isoObject: any, ...__args: never[]): any;

      OnObjectAboutToBeRemoved(isoObject: any, ...__args: never[]): any;

      OnObjectAdded(isoObject: any, ...__args: never[]): any;

      removeLuaObject(luaObject: any, ...__args: never[]): any;

      removeLuaObjectAt(x: any, y: any, z: any, ...__args: never[]): any;

      removeLuaObjectOnClient(luaObject: any, ...__args: never[]): any;

      removeLuaObjectOnSquare(square: any, ...__args: never[]): any;

      sendCommand(command: any, args: any, ...__args: never[]): any;

      /** @noSelf */
      static RegisterSystemClass: (luaClass: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Map.SGlobalObjectSystem {}
}
