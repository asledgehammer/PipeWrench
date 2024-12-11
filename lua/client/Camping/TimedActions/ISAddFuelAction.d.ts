/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISAddFuelAction:new */
    export class ISAddFuelAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      fuelAmt: any;

      item: any;

      sound: any;

      constructor(character: any, campfire: any, item: any, fuelAmt: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISAddFuelAction {}
}
