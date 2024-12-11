/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFireplaceExtinguish:new */
    export class ISFireplaceExtinguish extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fireplace: any;

      constructor(character: any, fireplace: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISFireplaceExtinguish {}
}
