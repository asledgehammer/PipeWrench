/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISCampingInfoAction:new */
    export class ISCampingInfoAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      campfireTable: any;

      playerNum: any;

      constructor(character: any, campfireObject: any, campfire: any);
    }
  }
  export namespace lua.client.TimedActions.ISCampingInfoAction {}
}
