/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.BuildingObjects.TimedActions {
    /** @customConstructor ISInsertLightSourceFuelAction:new */
    export class ISInsertLightSourceFuelAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fuel: any;

      lightSource: any;

      constructor(character: any, lightSource: any, fuel: any, time: any);
    }
  }
  export namespace lua.client.BuildingObjects.TimedActions.ISInsertLightSourceFuelAction {}
}
