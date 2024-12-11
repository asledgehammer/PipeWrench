/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISPlugGenerator:new */
    export class ISPlugGenerator extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      generator: any;

      plug: any;

      sound: any;

      constructor(character: any, generator: any, plug: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISPlugGenerator {}
}
