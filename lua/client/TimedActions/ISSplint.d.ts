/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISSplint:new */
    export class ISSplint extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bandagedPlayerX: any;

      bandagedPlayerY: any;

      bodyPart: any;

      doctor: any;

      doctorLevel: any;

      doIt: any;

      otherPlayer: any;

      plank: any;

      rippedSheet: any;

      constructor(doctor: any, otherPlayer: any, rippedSheet: any, plank: any, bodyPart: any, doIt: any);
    }
  }
  export namespace lua.client.TimedActions.ISSplint {}
}
