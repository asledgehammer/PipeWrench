/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISAttachItemHotbar:new */
    export class ISAttachItemHotbar extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      equipped: any;

      fromHotbar: any;

      hotbar: any;

      ignoreHandsWounds: any;

      item: any;

      slot: any;

      slotDef: any;

      slotIndex: any;

      useProgressBar: any;

      constructor(character: any, item: any, slot: any, slotIndex: any, slotDef: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISAttachItemHotbar {}
}
