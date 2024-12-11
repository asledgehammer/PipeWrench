/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISUninstallVehiclePart:new */
    export class ISUninstallVehiclePart extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      jobType: any;

      part: any;

      vehicle: any;

      constructor(character: any, part: any, time: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISUninstallVehiclePart {}
}
