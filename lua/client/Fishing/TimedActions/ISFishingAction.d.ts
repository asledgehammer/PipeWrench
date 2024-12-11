/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Fishing.TimedActions {
    /** @customConstructor ISFishingAction:new */
    export class ISFishingAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      attractNumber: any;

      castAfterReel: any;

      firstCast: any;

      fishingLvl: any;

      fishingUI: any;

      fishingZoneIncrease: any;

      lure: any;

      pole: any;

      rod: any;

      splashTimer: any;

      stage: any;

      tile: any;

      usingSpear: any;

      constructor(character: any, tile: any, rod: any, lure: any, fishingUI: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      attractFish(...__args: never[]): any;

      brokeLine(fish: any, ...__args: never[]): any;

      brokeThisLine(...__args: never[]): any;

      createFish(fishType: any, fish: any, ...__args: never[]): any;

      getFish(...__args: never[]): any;

      getFishByLure(...__args: never[]): any;

      getFishingZone(...__args: never[]): any;

      getUsedInventory(item: any, ...__args: never[]): any;

      /** @noSelf */
      static getFishingZoneFixed: (x: any, y: any, z: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Fishing.TimedActions.ISFishingAction {}
}
