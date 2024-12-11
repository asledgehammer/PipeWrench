/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISWalkToTimedAction:new */
    export class ISWalkToTimedAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
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

      setOnComplete(func: any, arg1: any, arg2: any, arg3: any, arg4: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.WalkToTimedAction {}
}
