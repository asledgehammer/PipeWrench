/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFixAction:new */
    export class ISFixAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fixer: any;

      fixing: any;

      item: any;

      jobType: any;

      vehiclePart: any;

      constructor(character: any, item: any, time: any, fixing: any, fixer: any, vehiclePart: any);
    }
  }
  export namespace lua.client.TimedActions.ISFixAction {}
}
