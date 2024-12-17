/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Traps.TimedActions {
    /** @customConstructor ISAddBaitAction:new */
    export class ISAddBaitAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bait: any;

      trap: any;

      constructor(character: any, bait: any, trap: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Traps.TimedActions.ISAddBaitAction {}
}
