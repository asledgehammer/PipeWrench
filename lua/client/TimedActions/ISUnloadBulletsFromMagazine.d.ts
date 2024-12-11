/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISUnloadBulletsFromMagazine:new */
    export class ISUnloadBulletsFromMagazine extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ammoCountStart: any;

      magazine: any;

      unloadFinished: any;

      useProgressBar: any;

      constructor(character: any, magazine: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      initVars(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISUnloadBulletsFromMagazine {}
}
