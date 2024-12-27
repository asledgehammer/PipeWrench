/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Fishing.TimedActions {
    /** @customConstructor ISAddBaitToFishNetAction:new */
    export class ISAddBaitToFishNetAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bait: any;

      fishNet: any;

      constructor(character: any, fishNet: any, bait: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Fishing.TimedActions.ISAddBaitToFishNetAction {}
}
