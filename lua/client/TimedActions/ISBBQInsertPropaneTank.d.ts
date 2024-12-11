/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBBQInsertPropaneTank:new */
    export class ISBBQInsertPropaneTank extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bbq: any;

      sound: any;

      tank: any;

      constructor(character: any, bbq: any, tank: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISBBQInsertPropaneTank {}
}
