/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.BuildingObjects.TimedActions {
    /** @customConstructor ISPlasterAction:new */
    export class ISPlasterAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      plasterBucket: any;

      sound: any;

      thumpable: any;

      constructor(character: any, thumpable: any, plasterBucket: any, time: any);
    }
  }
  export namespace lua.client.BuildingObjects.TimedActions.ISPlasterAction {}
}
