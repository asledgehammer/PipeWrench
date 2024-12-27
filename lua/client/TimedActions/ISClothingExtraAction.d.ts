/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISClothingExtraAction:new */
    export class ISClothingExtraAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      equipSound: any;

      extra: any;

      item: any;

      started: any;

      transactionId: any;

      constructor(character: any, item: any, extra: any);

      createItem(item: any, itemType: any, ...__args: never[]): any;

      createItemNew(item: any, newItem: any, ...__args: never[]): any;

      performNew(playerObj: any, item: any, extra: any, ...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISClothingExtraAction {}
}
