/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Traps.TimedActions {
    /** @customConstructor ISAddBaitAction:new */
    export class ISAddBaitAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bait: any;

      trap: any;

      constructor(character: any, bait: any, trap: any, time: any);
    }
  }
  export namespace lua.client.Traps.TimedActions.ISAddBaitAction {}
}
