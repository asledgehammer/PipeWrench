/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRemoveBush:new */
    export class ISRemoveBush extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      spriteFrame: any;

      square: any;

      wallVine: any;

      weapon: any;

      constructor(character: any, square: any, wallVine: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      getBushObject(square: any, ...__args: never[]): any;

      getWallVineObject(square: any, ...__args: never[]): any;

      useEndurance(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISRemoveBush {}
}
