/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISExitVehicle:new */
    export class ISExitVehicle extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      vehicle: any;

      constructor(character: any);

      getExtraLogData(...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISExitVehicle {}
}
