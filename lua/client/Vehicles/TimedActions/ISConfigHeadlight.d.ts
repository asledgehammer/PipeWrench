/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISConfigHeadlight:new */
    export class ISConfigHeadlight extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      dir: any;

      part: any;

      vehicle: any;

      constructor(character: any, part: any, dir: any, time: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISConfigHeadlight {}
}
