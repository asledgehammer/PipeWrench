/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISConsolidateDrainableAll:new */
    export class ISConsolidateDrainableAll extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      consolidateList: any;

      drainable: any;

      constructor(character: any, drainable: any, consolidateList: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISConsolidateDrainableAll {}
}
