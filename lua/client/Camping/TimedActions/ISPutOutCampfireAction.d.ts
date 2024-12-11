/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISPutOutCampfireAction:new */
    export class ISPutOutCampfireAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      constructor(character: any, campfire: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISPutOutCampfireAction {}
}
