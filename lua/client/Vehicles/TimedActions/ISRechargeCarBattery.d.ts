/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISRechargeCarBattery:new */
    export class ISRechargeCarBattery extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      battery: any;

      charger: any;

      constructor(battery: any, carCharger: any, chr: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISRechargeCarBattery {}
}
