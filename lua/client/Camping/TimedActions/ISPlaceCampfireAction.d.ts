/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISPlaceCampfireAction:new */
    export class ISPlaceCampfireAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sq: any;

      constructor(character: any, sq: any, item: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISPlaceCampfireAction {}
}
