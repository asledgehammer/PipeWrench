/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Traps.TimedActions {
    /** @customConstructor ISRemoveTrapAction:new */
    export class ISRemoveTrapAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      trap: any;

      constructor(character: any, trap: any, time: any);
    }
  }
  export namespace lua.client.Traps.TimedActions.ISRemoveTrapAction {}
}
