/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISLightFromLiterature:new */
    export class ISLightFromLiterature extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      fuelAmt: any;

      item: any;

      lighter: any;

      sound: any;

      constructor(character: any, item: any, lighter: any, campfire: any, fuelAmt: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISLightFromLiterature {}
}
