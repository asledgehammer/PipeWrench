/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISEatFoodAction:new */
    export class ISEatFoodAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      eatAudio: any;

      eatSound: any;

      ignoreHandsWounds: any;

      item: any;

      percentage: any;

      constructor(character: any, item: any, percentage: any);

      eat(food: any, percentage: any, ...__args: never[]): any;

      getRequiredItem(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISEatFoodAction {}
}
