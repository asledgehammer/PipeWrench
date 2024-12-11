/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISGrabItemAction:new */
    export class ISGrabItemAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      destContainer: any;

      ignoreAction: any;

      item: any;

      loopedAction: any;

      queueList: any;

      constructor(character: any, item: any, time: any);

      checkQueueList(...__args: never[]): any;

      transferItem(item: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISGrabItemAction {}
}
