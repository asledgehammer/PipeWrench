/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISDrumLightFromKindle:new */
    export class ISDrumLightFromKindle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      isOutdoorsMan: any;

      item: any;

      metalDrum: any;

      plank: any;

      constructor(character: any, plank: any, stickOrBranch: any, metalDrum: any, time: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISDrumLightFromKindle {}
}
