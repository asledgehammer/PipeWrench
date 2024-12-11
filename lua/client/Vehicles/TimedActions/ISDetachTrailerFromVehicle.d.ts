/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISDetachTrailerFromVehicle:new */
    export class ISDetachTrailerFromVehicle extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      attachment: any;

      hitchPos: any;

      vehicle: any;

      constructor(character: any, vehicle: any, attachment: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISDetachTrailerFromVehicle {}
}
