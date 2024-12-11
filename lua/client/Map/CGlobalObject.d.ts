/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Map {
    /** @customConstructor CGlobalObject:new */
    export class CGlobalObject extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      globalObject: any;

      luaSystem: any;

      x: any;

      y: any;

      z: any;

      constructor(luaSystem: any, globalObject: any);

      fromModData(modData: any, ...__args: never[]): any;

      getIsoObject(...__args: never[]): any;

      getSquare(...__args: never[]): any;

      noise(message: any, ...__args: never[]): any;

      updateFromIsoObject(...__args: never[]): any;
    }
  }
  export namespace lua.client.Map.CGlobalObject {}
}
