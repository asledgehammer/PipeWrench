/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISFurnaceLightFromKindle:new */
    export class ISFurnaceLightFromKindle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      furnace: any;

      isOutdoorsMan: any;

      item: any;

      plank: any;

      constructor(character: any, plank: any, stickOrBranch: any, furnace: any, time: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISFurnaceLightFromKindle {}
}
