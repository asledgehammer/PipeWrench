/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Farming.TimedActions {
    /** @customConstructor ISPlantInfoAction:new */
    export class ISPlantInfoAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      plant: any;

      playerNum: any;

      constructor(character: any, plant: any);
    }
  }
  export namespace lua.client.Farming.TimedActions.ISPlantInfoAction {}
}
