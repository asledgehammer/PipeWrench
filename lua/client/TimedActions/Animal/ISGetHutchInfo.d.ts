/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions.Animal {
    /** @customConstructor ISGetHutchInfo:new */
    export class ISGetHutchInfo extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      hutch: any;

      constructor(character: any, hutch: any);
    }
  }
  export namespace lua.client.TimedActions.Animal.ISGetHutchInfo {}
}
