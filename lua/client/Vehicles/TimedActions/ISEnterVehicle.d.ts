/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISEnterVehicle:new */
    export class ISEnterVehicle extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      seat: any;

      started: any;

      vehicle: any;

      constructor(character: any, vehicle: any, seat: any);

      getExtraLogData(...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISEnterVehicle {}
}
