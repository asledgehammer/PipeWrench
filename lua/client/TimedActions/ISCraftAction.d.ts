/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISCraftAction:new */
    export class ISCraftAction extends lua.shared.TimedActions.ISBaseTimedAction {
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

      addOrDropItem: ((item: any) => any) | any;

      getPropItemOrModel: ((propStr: any) => any) | any;

      setOnComplete:
        | ((func: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any) => any)
        | any;
    }
  }
  export namespace lua.client.TimedActions.ISCraftAction {}
}
