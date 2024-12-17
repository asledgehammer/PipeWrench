/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions.Animal {
    /** @customConstructor ISInspectAnimalTrackAction:new */
    export class ISInspectAnimalTrackAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      track: any;

      constructor(character: any, track: any);
    }
  }
  export namespace lua.client.TimedActions.Animal.ISInspectAnimalTrackAction {}
}
