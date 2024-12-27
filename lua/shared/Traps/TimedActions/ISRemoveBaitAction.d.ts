/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Traps.TimedActions {
    /** @customConstructor ISRemoveBaitAction:new */
    export class ISRemoveBaitAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      trap: any;

      constructor(character: any, trap: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Traps.TimedActions.ISRemoveBaitAction {}
}
