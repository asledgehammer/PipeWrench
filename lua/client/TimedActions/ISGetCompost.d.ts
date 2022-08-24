/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISGetCompost:new */
    export class ISGetCompost extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      compost: any;

      item: any;

      constructor(character: any, compost: any, item: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISGetCompost {}
}
