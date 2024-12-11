/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISInflateTire:new */
    export class ISInflateTire extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      jobType: any;

      part: any;

      psiSent: any;

      psiStart: any;

      psiTarget: any;

      totalPsi: any;

      vehicle: any;

      constructor(character: any, part: any, item: any, psi: any, time: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISInflateTire {}
}
