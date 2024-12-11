/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBuryCorpse:new */
    export class ISBuryCorpse extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      graves: any;

      shovel: any;

      constructor(character: any, graves: any, time: any, shovel: any);

      increaseCorpse(square: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISBuryCorpse {}
}
