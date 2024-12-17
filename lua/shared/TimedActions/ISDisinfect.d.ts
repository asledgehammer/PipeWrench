/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISDisinfect:new */
    export class ISDisinfect extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      alcohol: any;

      bandagedPlayerX: any;

      bandagedPlayerY: any;

      bodyPart: any;

      doctor: any;

      doctorLevel: any;

      otherPlayer: any;

      sound: any;

      constructor(character: any, otherPlayer: any, alcohol: any, bodyPart: any);

      complete(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISDisinfect {}
}
