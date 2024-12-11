/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISActivateCarBatteryChargerAction:new */
    export class ISActivateCarBatteryChargerAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      activate: any;

      charger: any;

      constructor(character: any, charger: any, activate: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISActivateCarBatteryChargerAction {}
}
