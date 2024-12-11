/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFireplaceInfoAction:new */
    export class ISFireplaceInfoAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fireplace: any;

      playerNum: any;

      constructor(character: any, fireplace: any);
    }
  }
  export namespace lua.client.TimedActions.ISFireplaceInfoAction {}
}
