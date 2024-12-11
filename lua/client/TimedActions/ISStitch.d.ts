/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISStitch:new */
    export class ISStitch extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bandagedPlayerX: any;

      bandagedPlayerY: any;

      bodyPart: any;

      doctor: any;

      doctorLevel: any;

      doIt: any;

      item: any;

      otherPlayer: any;

      constructor(doctor: any, otherPlayer: any, item: any, bodyPart: any, doIt: any);
    }
  }
  export namespace lua.client.TimedActions.ISStitch {}
}
