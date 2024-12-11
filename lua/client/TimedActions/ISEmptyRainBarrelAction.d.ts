/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISEmptyRainBarrelAction:new */
    export class ISEmptyRainBarrelAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      object: any;

      sound: any;

      constructor(character: any, object: any);

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISEmptyRainBarrelAction {}
}
