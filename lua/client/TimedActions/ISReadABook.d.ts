/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISReadABook:new */
    export class ISReadABook extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      forceProgressBar: any;

      ignoreHandsWounds: any;

      item: any;

      pageTimer: any;

      stats: any;

      constructor(character: any, item: any, time: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      /** @noSelf */
      static checkLevel: (character: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static checkMultiplier: (self: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.TimedActions.ISReadABook {}
}
