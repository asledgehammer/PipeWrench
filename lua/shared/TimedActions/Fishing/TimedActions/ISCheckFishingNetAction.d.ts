/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Fishing.TimedActions {
    /** @customConstructor ISCheckFishingNetAction:new */
    export class ISCheckFishingNetAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      hours: any;

      trap: any;

      constructor(character: any, trap: any, hours: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Fishing.TimedActions.ISCheckFishingNetAction {}
}
