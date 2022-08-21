/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISStopAlarmClockAction:new */
    export class ISStopAlarmClockAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      alarm: any;

      constructor(character: any, alarm: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISStopAlarmClockAction {}
}
