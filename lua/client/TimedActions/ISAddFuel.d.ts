/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISAddFuel:new */
    export class ISAddFuel extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      generator: any;

      petrol: any;

      sound: any;

      constructor(character: any, generator: any, petrolCan: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISAddFuel {}
}
