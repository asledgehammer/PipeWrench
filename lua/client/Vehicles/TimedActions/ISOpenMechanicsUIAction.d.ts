/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISOpenMechanicsUIAction:new */
    export class ISOpenMechanicsUIAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      usedHood: any;

      vehicle: any;

      constructor(character: any, vehicle: any, usedHood: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISOpenMechanicsUIAction {}
}
