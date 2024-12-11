/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTakeWaterAction:new */
    export class ISTakeWaterAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      endUsedDelta: any;

      item: any;

      oldItem: any;

      sound: any;

      startUsedDelta: any;

      waterObject: any;

      waterUnit: any;

      constructor(character: any, item: any, waterUnit: any, waterObject: any, time: any, oldItem: any);

      stopSound(...__args: never[]): any;

      /** @noSelf */
      static SendTakeWaterCommand: (playerObj: any, object: any, units: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.TimedActions.ISTakeWaterAction {}
}
