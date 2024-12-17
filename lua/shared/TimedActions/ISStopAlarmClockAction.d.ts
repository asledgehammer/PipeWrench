/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISStopAlarmClockAction:new */
    export class ISStopAlarmClockAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      alarm: any;

      constructor(character: any, alarm: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISStopAlarmClockAction {}
}
