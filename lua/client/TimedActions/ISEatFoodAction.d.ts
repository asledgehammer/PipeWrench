/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISEatFoodAction:new */
    export class ISEatFoodAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      eatAudio: any;

      eatSound: any;

      ignoreHandsWounds: any;

      item: any;

      percentage: any;

      constructor(character: any, item: any, percentage: any);

      eat: ((food: any, percentage: any) => any) | any;

      getRequiredItem: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISEatFoodAction {}
}
