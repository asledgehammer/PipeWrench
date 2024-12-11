/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISToggleComboWasherDryer:new */
    export class ISToggleComboWasherDryer extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      object: any;

      constructor(character: any, object: any);
    }
  }
  export namespace lua.client.TimedActions.ISToggleComboWasherDryer {}
}
