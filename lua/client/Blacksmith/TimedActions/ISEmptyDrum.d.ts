/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISEmptyDrum:new */
    export class ISEmptyDrum extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      metalDrum: any;

      constructor(character: any, metalDrum: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISEmptyDrum {}
}
