/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFireplaceLightFromPetrol:new */
    export class ISFireplaceLightFromPetrol extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fireplace: any;

      lighter: any;

      petrol: any;

      sound: any;

      constructor(character: any, fireplace: any, lighter: any, petrol: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISFireplaceLightFromPetrol {}
}
