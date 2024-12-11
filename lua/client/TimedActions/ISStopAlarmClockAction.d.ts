/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISStopAlarmClockAction:new */
    export class ISStopAlarmClockAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      alarm: any;

      constructor(character: any, alarm: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISStopAlarmClockAction {}
}
