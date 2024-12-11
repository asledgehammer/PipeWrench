/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISLockVehicleDoor:new */
    export class ISLockVehicleDoor extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      part: any;

      vehicle: any;

      constructor(character: any, part: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISLockVehicleDoor {}
}
