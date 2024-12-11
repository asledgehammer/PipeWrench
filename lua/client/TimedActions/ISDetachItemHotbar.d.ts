/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDetachItemHotbar:new */
    export class ISDetachItemHotbar extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      equipped: any;

      fromHotbar: any;

      hotbar: any;

      ignoreHandsWounds: any;

      item: any;

      useProgressBar: any;

      constructor(character: any, item: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISDetachItemHotbar {}
}
