/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISCutHair:new */
    export class ISCutHair extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      hairStyle: any;

      item: any;

      constructor(character: any, hairStyle: any, item: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISCutHair {}
}
