/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISAddGasolineToVehicle:new */
    export class ISAddGasolineToVehicle extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      amountSent: any;

      item: any;

      itemStart: any;

      itemTarget: any;

      JerryCanLitres: any;

      part: any;

      sound: any;

      tankStart: any;

      tankTarget: any;

      vehicle: any;

      constructor(character: any, part: any, item: any, time: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISAddGasolineToVehicle {}
}
