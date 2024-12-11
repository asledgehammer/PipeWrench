/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISMedicalCheckAction:new */
    export class ISMedicalCheckAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      forceProgressBar: any;

      otherPlayer: any;

      otherPlayerX: any;

      otherPlayerY: any;

      constructor(character: any, otherPlayer: any);

      /** @noSelf */
      static getHealthWindowForPlayer: (playerObj: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.TimedActions.ISMedicalCheckAction {}
}
