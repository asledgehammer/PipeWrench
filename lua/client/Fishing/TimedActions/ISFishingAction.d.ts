/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Fishing.TimedActions {
    /** @customConstructor ISFishingAction:new */
    export class ISFishingAction extends lua.shared.TimedActions.ISBaseTimedAction {
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

      animEvent: ((event: any, parameter: any) => any) | any;

      attractFish: (() => any) | any;

      brokeLine: ((fish: any) => any) | any;

      brokeThisLine: (() => any) | any;

      createFish: ((fishType: any, fish: any) => any) | any;

      getFish: (() => any) | any;

      getFishByLure: (() => any) | any;

      getFishingZone: (() => any) | any;

      getUsedInventory: ((item: any) => any) | any;

      /** @noSelf */
      static getFishingZoneFixed: (x: any, y: any, z: any) => any;
    }
  }
  export namespace lua.client.Fishing.TimedActions.ISFishingAction {}
}
