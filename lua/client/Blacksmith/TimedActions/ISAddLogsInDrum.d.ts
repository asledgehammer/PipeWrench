/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISAddLogsInDrum:new */
    export class ISAddLogsInDrum extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      add: any;

      metalDrum: any;

      constructor(character: any, metalDrum: any, add: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISAddLogsInDrum {}
}
