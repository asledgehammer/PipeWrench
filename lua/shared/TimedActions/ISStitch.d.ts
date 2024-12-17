/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISStitch:new */
    export class ISStitch extends lua.shared.TimedActions.ISBaseTimedAction {
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

      sound: any;

      constructor(character: any, otherPlayer: any, item: any, bodyPart: any, doIt: any);

      complete(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISStitch {}
}
