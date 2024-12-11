/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISLightActions:new */
    export class ISLightActions extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      lightswitch: any;

      mode: any;

      constructor(mode: any, character: any, lightswitch: any, item: any);

      isValidAddBattery(...__args: never[]): any;

      isValidAddLightBulb(...__args: never[]): any;

      isValidModifyLamp(...__args: never[]): any;

      isValidRemoveBattery(...__args: never[]): any;

      isValidRemoveLightBulb(...__args: never[]): any;

      performAddBattery(...__args: never[]): any;

      performAddLightBulb(...__args: never[]): any;

      performModifyLamp(...__args: never[]): any;

      performRemoveBattery(...__args: never[]): any;

      performRemoveLightBulb(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISLightActions {}
}
