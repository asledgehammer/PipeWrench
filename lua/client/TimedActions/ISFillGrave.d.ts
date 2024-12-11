/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFillGrave:new */
    export class ISFillGrave extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      graves: any;

      shovel: any;

      sound: any;

      constructor(character: any, graves: any, time: any, shovel: any);

      changeSprite(square: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISFillGrave {}
}
