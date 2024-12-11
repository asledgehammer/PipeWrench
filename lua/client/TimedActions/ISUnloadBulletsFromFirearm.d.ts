/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISUnloadBulletsFromFirearm:new */
    export class ISUnloadBulletsFromFirearm extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ammoCountStart: any;

      gun: any;

      playedEjectAmmoStartSound: any;

      unloadFinished: any;

      useProgressBar: any;

      constructor(character: any, gun: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      initVars(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISUnloadBulletsFromFirearm {}
}
