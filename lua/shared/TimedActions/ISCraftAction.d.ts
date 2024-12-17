/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISCraftAction:new */
    export class ISCraftAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      container: any;

      containers: any;

      containersIn: any;

      craftSound: any;

      forceProgressBar: any;

      item: any;

      jobType: any;

      onCompleteArgs: any;

      onCompleteFunc: any;

      recipe: any;

      constructor(character: any, item: any, recipe: any, container: any, containersIn: any);

      complete(...__args: never[]): any;

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
  export namespace lua.shared.TimedActions.ISCraftAction {}
}
