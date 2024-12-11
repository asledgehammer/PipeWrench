/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBBQAddFuel:new */
    export class ISBBQAddFuel extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fireplace: any;

      fuelAmt: any;

      item: any;

      sound: any;

      constructor(character: any, fireplace: any, item: any, fuelAmt: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISBBQAddFuel {}
}
