/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRemoveBrokenGlass:new */
    export class ISRemoveBrokenGlass extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      window: any;

      constructor(character: any, window: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISRemoveBrokenGlass {}
}
