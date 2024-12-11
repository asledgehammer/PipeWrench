/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISOvenUITimedAction:new */
    export class ISOvenUITimedAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      mcwave: any;

      stove: any;

      constructor(character: any, stove: any, mcwave: any);
    }
  }
  export namespace lua.client.TimedActions.ISOvenUITimedAction {}
}
