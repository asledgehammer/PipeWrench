/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISShutOffVehicleEngine:new */
    export class ISShutOffVehicleEngine extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      constructor(character: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISShutOffVehicleEngine {}
}
