/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISLockDoors:new */
    export class ISLockDoors extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      locked: any;

      vehicle: any;

      constructor(character: any, vehicle: any, locked: any, time: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISLockDoors {}
}
