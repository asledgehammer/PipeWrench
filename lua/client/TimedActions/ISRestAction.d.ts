/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRestAction:new */
    export class ISRestAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      forceProgressBar: any;

      mul: any;

      constructor(character: any);
    }
  }
  export namespace lua.client.TimedActions.ISRestAction {}
}
