/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFireplaceLightFromKindle:new */
    export class ISFireplaceLightFromKindle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fireplace: any;

      isOutdoorsMan: any;

      item: any;

      plank: any;

      sound: any;

      constructor(character: any, plank: any, stickOrBranch: any, fireplace: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISFireplaceLightFromKindle {}
}
