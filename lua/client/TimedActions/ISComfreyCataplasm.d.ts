/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISComfreyCataplasm:new */
    export class ISComfreyCataplasm extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bandagedPlayerX: any;

      bandagedPlayerY: any;

      bodyPart: any;

      doctorLevel: any;

      item: any;

      otherPlayer: any;

      constructor(doctor: any, otherPlayer: any, item: any, bodyPart: any);
    }
  }
  export namespace lua.client.TimedActions.ISComfreyCataplasm {}
}
