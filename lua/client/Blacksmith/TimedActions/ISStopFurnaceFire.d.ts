/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISStopFurnaceFire:new */
    export class ISStopFurnaceFire extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      furnace: any;

      constructor(furnace: any, character: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISStopFurnaceFire {}
}
