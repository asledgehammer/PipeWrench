/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISOpenVehicleDoor:new */
    export class ISOpenVehicleDoor extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      vehicle: any;

      constructor(character: any, vehicle: any, partOrSeat: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISOpenVehicleDoor {}
}
