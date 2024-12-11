/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISLightFromPetrol:new */
    export class ISLightFromPetrol extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      lighter: any;

      petrol: any;

      constructor(character: any, campfire: any, lighter: any, petrol: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISLightFromPetrol {}
}
