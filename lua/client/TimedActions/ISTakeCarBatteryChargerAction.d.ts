/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTakeCarBatteryChargerAction:new */
    export class ISTakeCarBatteryChargerAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      charger: any;

      constructor(character: any, charger: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISTakeCarBatteryChargerAction {}
}
