/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISCloseVehicleDoor:new */
    export class ISCloseVehicleDoor extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      vehicle: any;

      constructor(character: any, vehicle: any, partOrSeat: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISCloseVehicleDoor {}
}
