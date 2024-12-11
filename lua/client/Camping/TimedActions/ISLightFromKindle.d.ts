/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISLightFromKindle:new */
    export class ISLightFromKindle extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      isOutdoorsMan: any;

      item: any;

      plank: any;

      sound: any;

      constructor(character: any, plank: any, stickOrBranch: any, campfire: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISLightFromKindle {}
}
