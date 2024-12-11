/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISRemoveCampfireAction:new */
    export class ISRemoveCampfireAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      constructor(character: any, campfire: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISRemoveCampfireAction {}
}
