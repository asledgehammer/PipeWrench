/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISLightFromKindle:new */
    export class ISLightFromKindle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      isOutdoorsMan: any;

      item: any;

      plank: any;

      sound: any;

      constructor(character: any, plank: any, stickOrBranch: any, campfire: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISLightFromKindle {}
}
