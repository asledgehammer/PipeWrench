/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Traps.TimedActions {
    /** @customConstructor ISRemoveTrapAction:new */
    export class ISRemoveTrapAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      trap: any;

      constructor(character: any, trap: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Traps.TimedActions.ISRemoveTrapAction {}
}
