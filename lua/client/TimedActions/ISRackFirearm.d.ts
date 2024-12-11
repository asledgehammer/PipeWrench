/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRackFirearm:new */
    export class ISRackFirearm extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      gun: any;

      playedEjectAmmoStartSound: any;

      useProgressBar: any;

      constructor(character: any, gun: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      ejectSpentRounds(...__args: never[]): any;

      initVars(...__args: never[]): any;

      rackBullet(...__args: never[]): any;

      removeBullet(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISRackFirearm {}
}
