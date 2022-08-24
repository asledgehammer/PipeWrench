/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISQueueActionsAction:new */
    export class ISQueueActionsAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      addActionsFunction: any;

      args: any;

      indexToAdd: any;

      isAddingActions: any;

      constructor(
        character: any,
        addActionsFunction: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        arg7: any,
        arg8: any,
        arg9: any,
        arg10: any
      );
    }
  }
  export namespace lua.client.TimedActions.ISQueueActionsAction {}
}
