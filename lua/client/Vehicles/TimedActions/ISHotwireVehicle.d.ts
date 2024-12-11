/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISHotwireVehicle:new */
    export class ISHotwireVehicle extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      sound: any;

      constructor(character: any);

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISHotwireVehicle {}
}
