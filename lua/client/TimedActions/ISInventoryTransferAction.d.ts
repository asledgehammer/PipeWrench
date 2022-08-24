/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISInventoryTransferAction:new */
    export class ISInventoryTransferAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      static putSound: any;

      static putSoundTime: any;

      allowMissingItems: any;

      destContainer: any;

      dontAdd: any;

      item: any;

      jobType: any;

      onCompleteArgs: any;

      onCompleteFunc: any;

      queueList: any;

      selectedContainer: any;

      srcContainer: any;

      transactions: any;

      constructor(character: any, item: any, srcContainer: any, destContainer: any, time: any);

      canDropOnFloor: ((square: any) => any) | any;

      canMergeAction: ((action: any) => any) | any;

      checkQueueList: (() => any) | any;

      countItemsRecursive: ((_containerList: any, _itemsNum: any) => any) | any;

      doActionAnim: ((cont: any) => any) | any;

      findRootInventory: ((_inventory: any) => any) | any;

      floorHasRoomFor: ((square: any, item: any) => any) | any;

      getExtraLogData: (() => any) | any;

      getNotFullFloorSquare: ((item: any) => any) | any;

      getTimeDelta: (() => any) | any;

      isAlreadyTransferred: ((item: any) => any) | any;

      removeItemOnCharacter: (() => any) | any;

      setAllowMissingItems: ((allow: any) => any) | any;

      setOnComplete:
        | ((func: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any) => any)
        | any;

      startActionAnim: (() => any) | any;

      transferItem: ((item: any) => any) | any;

      /** @noSelf */
      static GetDropItemOffset: (character: any, square: any, item: any) => any;
    }
  }
  export namespace lua.client.TimedActions.ISInventoryTransferAction {}
}
