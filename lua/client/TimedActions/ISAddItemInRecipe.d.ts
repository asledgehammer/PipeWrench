/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISAddItemInRecipe:new */
    export class ISAddItemInRecipe extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      baseItem: any;

      jobType: any;

      recipe: any;

      sound: any;

      usedItem: any;

      constructor(character: any, recipe: any, baseItem: any, usedItem: any, time: any);

      /** @noSelf */
      static checkName: (baseItem: any, recipe: any, ...__args: never[]) => any;

      /** @noSelf */
      static checkTemperature: (baseItem: any, usedItem: any, recipe: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.TimedActions.ISAddItemInRecipe {}
}
