/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISForageAction:new */
    export class ISForageAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      currentTime: any;

      discardItems: any;

      forageIcon: any;

      itemDef: any;

      manager: any;

      started: any;

      targetContainer: any;

      zoneData: any;

      constructor(_forageIcon: any, _targetContainer: any, _discardItems: any);

      forage(...__args: never[]): any;
    }
  }
  export namespace lua.client.Foraging.ISForageAction {}
}
