/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISDrumLightFromLiterature:new */
    export class ISDrumLightFromLiterature extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fuelAmt: any;

      item: any;

      lighter: any;

      metalDrum: any;

      constructor(character: any, item: any, lighter: any, metalDrum: any, fuelAmt: any, time: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISDrumLightFromLiterature {}
}
