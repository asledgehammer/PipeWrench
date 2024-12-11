/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDismantleAction:new */
    export class ISDismantleAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      thumpable: any;

      constructor(character: any, thumpable: any);
    }
  }
  export namespace lua.client.TimedActions.ISDismantleAction {}
}
