/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISCleanBandage:new */
    export class ISCleanBandage extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      recipe: any;

      result: any;

      waterObject: any;

      constructor(character: any, item: any, waterObject: any, recipe: any);
    }
  }
  export namespace lua.client.TimedActions.ISCleanBandage {}
}
