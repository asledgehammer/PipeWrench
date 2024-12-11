/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISAddWaterFromItemAction:new */
    export class ISAddWaterFromItemAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      addUnits: any;

      itemFrom: any;

      itemFromStartDelta: any;

      objectTo: any;

      sound: any;

      constructor(character: any, itemFrom: any, objectTo: any);

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISAddWaterFromItemAction {}
}
