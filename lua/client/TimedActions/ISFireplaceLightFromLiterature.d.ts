/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFireplaceLightFromLiterature:new */
    export class ISFireplaceLightFromLiterature extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fireplace: any;

      fuelAmt: any;

      item: any;

      lighter: any;

      sound: any;

      constructor(character: any, item: any, lighter: any, fireplace: any, fuelAmt: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISFireplaceLightFromLiterature {}
}
