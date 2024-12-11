/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISHorn:new */
    export class ISHorn extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      t: any;

      constructor(character: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISHorn {}
}
