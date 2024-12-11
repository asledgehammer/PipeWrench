/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISWearClothing:new */
    export class ISWearClothing extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fromHotbar: any;

      item: any;

      constructor(character: any, item: any, time: any);

      isAlreadyEquipped(item: any, ...__args: never[]): any;
    }

    export abstract class WearClothingAnimations {
      static [id: string]: any;
    }
  }
  export namespace lua.client.TimedActions.ISWearClothing {}
}
