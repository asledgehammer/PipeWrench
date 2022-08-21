/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISPlaceTrap:new */
    export class ISPlaceTrap extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      square: any;

      weapon: any;

      constructor(character: any, weapon: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISPlaceTrap {}
}
