/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISCleanBurn:new */
    export class ISCleanBurn extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bandage: any;

      bandagedPlayerX: any;

      bandagedPlayerY: any;

      bodyPart: any;

      doctorLevel: any;

      otherPlayer: any;

      constructor(doctor: any, otherPlayer: any, bandage: any, bodyPart: any);
    }
  }
  export namespace lua.client.TimedActions.ISCleanBurn {}
}
