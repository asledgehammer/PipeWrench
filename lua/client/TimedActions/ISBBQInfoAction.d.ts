/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBBQInfoAction:new */
    export class ISBBQInfoAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bbq: any;

      playerNum: any;

      constructor(character: any, bbq: any);
    }
  }
  export namespace lua.client.TimedActions.ISBBQInfoAction {}
}
