/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISSetComboWasherDryerMode:new */
    export class ISSetComboWasherDryerMode extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      mode: any;

      object: any;

      constructor(character: any, object: any, mode: any);
    }
  }
  export namespace lua.client.TimedActions.ISSetComboWasherDryerMode {}
}
