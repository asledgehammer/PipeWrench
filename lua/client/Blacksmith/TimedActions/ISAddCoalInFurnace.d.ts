/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISAddCoalInFurnace:new */
    export class ISAddCoalInFurnace extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      coal: any;

      furnace: any;

      constructor(furnace: any, coal: any, character: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISAddCoalInFurnace {}
}
