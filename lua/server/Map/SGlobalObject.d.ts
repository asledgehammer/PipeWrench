/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Map {
    /** @customConstructor SGlobalObject:new */
    export class SGlobalObject extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      globalObject: any;

      luaSystem: any;

      x: any;

      y: any;

      z: any;

      constructor(luaSystem: any, globalObject: any);

      aboutToRemoveFromSystem(...__args: never[]): any;

      getIsoObject(...__args: never[]): any;

      getSquare(...__args: never[]): any;

      initNew(...__args: never[]): any;

      noise(message: any, ...__args: never[]): any;

      OnIsoObjectChangedItself(isoObject: any, ...__args: never[]): any;

      OnModDataChangeItself(isoObject: any, ...__args: never[]): any;

      removeIsoObject(...__args: never[]): any;

      stateFromIsoObject(isoObject: any, ...__args: never[]): any;

      stateToIsoObject(isoObject: any, ...__args: never[]): any;

      updateOnClient(...__args: never[]): any;
    }
  }
  export namespace lua.server.Map.SGlobalObject {}
}
