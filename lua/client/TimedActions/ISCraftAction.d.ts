/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISCraftAction:new */
    export class ISCraftAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      container: any;

      containers: any;

      craftSound: any;

      forceProgressBar: any;

      fromFloor: any;

      item: any;

      jobType: any;

      onCompleteArgs: any;

      onCompleteFunc: any;

      recipe: any;

      constructor(character: any, item: any, time: any, recipe: any, container: any, containers: any);

      addOrDropItem(item: any, ...__args: never[]): any;

      getPropItemOrModel(propStr: any, ...__args: never[]): any;

      setOnComplete(
        func: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        arg7: any,
        arg8: any,
        ...__args: never[]
      ): any;
    }
  }
  export namespace lua.client.TimedActions.ISCraftAction {}
}
