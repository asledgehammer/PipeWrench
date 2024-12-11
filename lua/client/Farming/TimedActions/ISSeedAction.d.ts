/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Farming.TimedActions {
    /** @customConstructor ISSeedAction:new */
    export class ISSeedAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      nbOfSeed: any;

      plant: any;

      seeds: any;

      sound: any;

      typeOfSeed: any;

      constructor(character: any, seeds: any, nbOfSeed: any, typeOfSeed: any, plant: any, time: any);
    }
  }
  export namespace lua.client.Farming.TimedActions.ISSeedAction {}
}
