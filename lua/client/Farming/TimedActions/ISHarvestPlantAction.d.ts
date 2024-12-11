/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Farming.TimedActions {
    /** @customConstructor ISHarvestPlantAction:new */
    export class ISHarvestPlantAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      plant: any;

      sound: any;

      constructor(character: any, plant: any, time: any);
    }
  }
  export namespace lua.client.Farming.TimedActions.ISHarvestPlantAction {}
}
