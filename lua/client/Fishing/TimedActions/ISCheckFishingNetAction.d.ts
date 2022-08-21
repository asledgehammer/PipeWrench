/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Fishing.TimedActions {
    /** @customConstructor ISCheckFishingNetAction:new */
    export class ISCheckFishingNetAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      hours: any;

      trap: any;

      constructor(player: any, trap: any, hours: any);
    }
  }
  export namespace lua.client.Fishing.TimedActions.ISCheckFishingNetAction {}
}
