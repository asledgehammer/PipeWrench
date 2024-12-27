/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISClimbThroughWindow:new */
    export class ISClimbThroughWindow extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      constructor(character: any, item: any, time: any);

      getFacingDirection(...__args: never[]): any;

      getNorth(object: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISClimbThroughWindow {}
}
