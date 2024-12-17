/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISClimbOverFence:new */
    export class ISClimbOverFence extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      constructor(character: any, item: any);

      getFacingDirection(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISClimbOverFence {}
}
