/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDrinkFromBottle:new */
    export class ISDrinkFromBottle extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      eatAudio: any;

      eatSound: any;

      ignoreHandsWounds: any;

      item: any;

      tick: any;

      uses: any;

      constructor(character: any, item: any, uses: any);

      drink(food: any, percentage: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISDrinkFromBottle {}
}
