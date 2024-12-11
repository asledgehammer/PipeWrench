/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISDrumLightFromKindle:new */
    export class ISDrumLightFromKindle extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      isOutdoorsMan: any;

      item: any;

      metalDrum: any;

      plank: any;

      constructor(character: any, plank: any, stickOrBranch: any, metalDrum: any, time: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISDrumLightFromKindle {}
}
