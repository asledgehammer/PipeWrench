/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISRemoveGlass:new */
    export class ISRemoveGlass extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bandagedPlayerX: any;

      bandagedPlayerY: any;

      bodyPart: any;

      doctor: any;

      doctorLevel: any;

      otherPlayer: any;

      sound: any;

      constructor(character: any, otherPlayer: any, bodyPart: any, hands: any);

      complete(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISRemoveGlass {}
}
