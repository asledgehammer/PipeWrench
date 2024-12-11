/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFixGenerator:new */
    export class ISFixGenerator extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      generator: any;

      sound: any;

      constructor(character: any, generator: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISFixGenerator {}
}
