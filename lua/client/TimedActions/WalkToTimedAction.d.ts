/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISWalkToTimedAction:new */
    export class ISWalkToTimedAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      additionalContext: any;

      additionalTest: any;

      location: any;

      onCompleteArgs: any;

      onCompleteFunc: any;

      pathIndex: any;

      result: any;

      constructor(character: any, location: any, additionalTest: any, additionalContext: any);

      setOnComplete: ((func: any, arg1: any, arg2: any, arg3: any, arg4: any) => any) | any;
    }
  }
  export namespace lua.client.TimedActions.WalkToTimedAction {}
}
