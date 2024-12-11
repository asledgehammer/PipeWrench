/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Farming.TimedActions {
    /** @customConstructor ISFertilizeAction:new */
    export class ISFertilizeAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      plant: any;

      constructor(character: any, item: any, plant: any, time: any);
    }
  }
  export namespace lua.client.Farming.TimedActions.ISFertilizeAction {}
}
