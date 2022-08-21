/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISUseBellows:new */
    export class ISUseBellows extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bellows: any;

      furnace: any;

      constructor(furnace: any, bellows: any, character: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISUseBellows {}
}
