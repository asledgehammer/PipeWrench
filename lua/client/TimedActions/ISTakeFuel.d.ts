/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTakeFuel:new */
    export class ISTakeFuel extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fuelStation: any;

      itemStart: any;

      itemTarget: any;

      petrolCan: any;

      sound: any;

      square: any;

      constructor(character: any, fuelStation: any, petrolCan: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISTakeFuel {}
}
