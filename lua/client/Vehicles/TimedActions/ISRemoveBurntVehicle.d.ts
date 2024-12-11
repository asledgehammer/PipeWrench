/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISRemoveBurntVehicle:new */
    export class ISRemoveBurntVehicle extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sound: any;

      vehicle: any;

      constructor(character: any, vehicle: any);

      checkAddItem(item: any, baseChance: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISRemoveBurntVehicle {}
}
