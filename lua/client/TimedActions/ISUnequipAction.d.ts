/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISUnequipAction:new */
    export class ISUnequipAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      hotbar: any;

      ignoreHandsWounds: any;

      item: any;

      sound: any;

      useProgressBar: any;

      constructor(character: any, item: any, time: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISUnequipAction {}
}
