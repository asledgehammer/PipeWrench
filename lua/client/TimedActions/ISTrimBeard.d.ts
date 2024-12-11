/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTrimBeard:new */
    export class ISTrimBeard extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      beardStyle: any;

      item: any;

      constructor(character: any, beardStyle: any, item: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISTrimBeard {}
}
