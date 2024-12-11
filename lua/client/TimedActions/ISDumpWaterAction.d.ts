/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDumpWaterAction:new */
    export class ISDumpWaterAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sound: any;

      startUsedDelta: any;

      constructor(character: any, item: any);

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISDumpWaterAction {}
}
