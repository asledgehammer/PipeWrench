/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISEquipHeavyItem:new */
    export class ISEquipHeavyItem extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      constructor(character: any, item: any, time: any);

      isAlreadyTransferred(item: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISEquipHeavyItem {}
}
