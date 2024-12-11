/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISInstallVehiclePart:new */
    export class ISInstallVehiclePart extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      jobType: any;

      part: any;

      vehicle: any;

      constructor(character: any, part: any, item: any, time: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISInstallVehiclePart {}
}
