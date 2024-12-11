/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISLoadBulletsInMagazine:new */
    export class ISLoadBulletsInMagazine extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ammoCount: any;

      ammoCountStart: any;

      loadFinished: any;

      magazine: any;

      playedInsertAmmoStartSound: any;

      useProgressBar: any;

      constructor(character: any, magazine: any, ammoCount: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      initVars(...__args: never[]): any;

      isLoadFinished(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISLoadBulletsInMagazine {}
}
