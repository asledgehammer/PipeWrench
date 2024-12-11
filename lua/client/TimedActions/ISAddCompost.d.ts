/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISAddCompost:new */
    export class ISAddCompost extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      compost: any;

      item: any;

      constructor(character: any, compost: any, item: any);
    }
  }
  export namespace lua.client.TimedActions.ISAddCompost {}
}
