/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISDrumLightFromPetrol:new */
    export class ISDrumLightFromPetrol extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      lighter: any;

      metalDrum: any;

      petrol: any;

      constructor(character: any, metalDrum: any, lighter: any, petrol: any, time: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISDrumLightFromPetrol {}
}
