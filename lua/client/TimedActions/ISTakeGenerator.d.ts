/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTakeGenerator:new */
    export class ISTakeGenerator extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      generator: any;

      constructor(character: any, generator: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISTakeGenerator {}
}
