/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRemoveBullet:new */
    export class ISRemoveBullet extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bandagedPlayerX: any;

      bandagedPlayerY: any;

      bodyPart: any;

      doctor: any;

      doctorLevel: any;

      otherPlayer: any;

      constructor(doctor: any, otherPlayer: any, bodyPart: any);
    }
  }
  export namespace lua.client.TimedActions.ISRemoveBullet {}
}
