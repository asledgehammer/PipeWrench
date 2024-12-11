/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISFurnaceLightFromPetrol:new */
    export class ISFurnaceLightFromPetrol extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      furnace: any;

      lighter: any;

      petrol: any;

      constructor(character: any, furnace: any, lighter: any, petrol: any, time: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISFurnaceLightFromPetrol {}
}
