/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Map {
    /** @customConstructor CGlobalObjectSystem:new */
    export class CGlobalObjectSystem extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      system: any;

      systemName: any;

      wantNoise: any;

      constructor(name: any);

      getIsoObjectAt(x: any, y: any, z: any, ...__args: never[]): any;

      getIsoObjectOnSquare(square: any, ...__args: never[]): any;

      getLuaObjectAt(x: any, y: any, z: any, ...__args: never[]): any;

      getLuaObjectByIndex(index: any, ...__args: never[]): any;

      getLuaObjectCount(...__args: never[]): any;

      getLuaObjectOnSquare(square: any, ...__args: never[]): any;

      initLuaObjects(...__args: never[]): any;

      initSystem(...__args: never[]): any;

      isValidIsoObject(isoObject: any, ...__args: never[]): any;

      newLuaObject(globalObject: any, ...__args: never[]): any;

      newLuaObjectAt(x: any, y: any, z: any, ...__args: never[]): any;

      noise(message: any, ...__args: never[]): any;

      OnLuaObjectUpdated(luaObject: any, ...__args: never[]): any;

      OnServerCommand(command: any, args: any, ...__args: never[]): any;

      removeLuaObject(luaObject: any, ...__args: never[]): any;

      removeLuaObjectAt(x: any, y: any, z: any, ...__args: never[]): any;

      sendCommand(playerObj: any, command: any, args: any, ...__args: never[]): any;

      /** @noSelf */
      static RegisterSystemClass: (luaClass: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Map.CGlobalObjectSystem {}
}
