/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISGrabItemAction:new */
    export class ISGrabItemAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      destContainer: any;

      ignoreAction: any;

      item: any;

      loopedAction: any;

      queueList: any;

      constructor(character: any, item: any, time: any);

      checkQueueList: (() => any) | any;

      transferItem: ((item: any) => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISGrabItemAction {}
}
