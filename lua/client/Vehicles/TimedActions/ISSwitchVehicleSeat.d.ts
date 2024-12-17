/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISSwitchVehicleSeat:new */
    export class ISSwitchVehicleSeat extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      seatTo: any;

      constructor(character: any, seatTo: any, seatFrom: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISSwitchVehicleSeat {}
}
