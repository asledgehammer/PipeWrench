/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISLockDoor:new */
    export class ISLockDoor extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      door: any;

      lock: any;

      constructor(character: any, door: any, lock: any);

      getSoundPrefix(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISLockDoor {}
}
