/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISApplyBandage:new */
    export class ISApplyBandage extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bandagedPlayerX: any;

      bandagedPlayerY: any;

      bodyPart: any;

      doctorLevel: any;

      doIt: any;

      item: any;

      otherPlayer: any;

      sound: any;

      sound2: any;

      constructor(character: any, otherPlayer: any, item: any, bodyPart: any, doIt: any);

      complete(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISApplyBandage {}
}
