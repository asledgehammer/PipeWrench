/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISInventoryTransferAction:new */
    export class ISInventoryTransferAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      static putSound: any;

      static putSoundContainer: any;

      static putSoundTime: any;

      allowMissingItems: any;

      destContainer: any;

      destContainerOpened: any;

      destContainerOpenSound: any;

      dontAdd: any;

      item: any;

      jobType: any;

      onCompleteArgs: any;

      onCompleteFunc: any;

      queueList: any;

      selectedContainer: any;

      sourceContainerOpened: any;

      sourceContainerOpenSound: any;

      srcContainer: any;

      started: any;

      transactionId: any;

      transactions: any;

      constructor(character: any, item: any, srcContainer: any, destContainer: any, time: any);

      canDropOnFloor(square: any, ...__args: never[]): any;

      canMergeAction(action: any, ...__args: never[]): any;

      checkQueueList(...__args: never[]): any;

      doActionAnim(cont: any, ...__args: never[]): any;

      floorHasRoomFor(square: any, item: any, ...__args: never[]): any;

      getExtraLogData(...__args: never[]): any;

      getNotFullFloorSquare(item: any, ...__args: never[]): any;

      getSoundName(...__args: never[]): any;

      getTimeDelta(...__args: never[]): any;

      isAlreadyTransferred(item: any, ...__args: never[]): any;

      playDestContainerCloseSound(...__args: never[]): any;

      playDestContainerOpenSound(...__args: never[]): any;

      playSourceContainerCloseSound(...__args: never[]): any;

      playSourceContainerOpenSound(...__args: never[]): any;

      setAllowMissingItems(allow: any, ...__args: never[]): any;

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

      startActionAnim(...__args: never[]): any;

      transferItem(item: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISInventoryTransferAction {}
}
