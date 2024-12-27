/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISEatFoodAction:new */
    export class ISEatFoodAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      carLighter: any;

      eatAudio: any;

      eatSound: any;

      ignoreHandsWounds: any;

      item: any;

      openFlame: any;

      percentage: any;

      playedScrapeSound: any;

      scrapeSound: any;

      useUtensil: any;

      constructor(character: any, item: any, percentage: any);

      complete(...__args: never[]): any;

      eat(food: any, percentage: any, ...__args: never[]): any;

      getRequiredItem(...__args: never[]): any;

      isEatingRemaining(item: any, ...__args: never[]): any;

      serverStop(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISEatFoodAction {}
}
