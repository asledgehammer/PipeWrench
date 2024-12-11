/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Movers {
    /** @customConstructor ISBaseMover:new */
    export class ISBaseMover extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      javaObject: any;

      sprite: any;

      states: any;

      constructor();

      changeState(state: any, ...__args: never[]): any;

      getSprite(...__args: never[]): any;

      init(...__args: never[]): any;

      placeInWorld(x: any, y: any, z: any, ...__args: never[]): any;

      playAnim(name: any, seconds: any, looped: any, animate: any, ...__args: never[]): any;

      postrender(col: any, bDoAttached: any, ...__args: never[]): any;

      removeFromWorld(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.server.Movers.ISBaseMover {}
}
