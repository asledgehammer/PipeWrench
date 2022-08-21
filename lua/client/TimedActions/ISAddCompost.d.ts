/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISAddCompost:new */
    export class ISAddCompost extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      compost: any;

      item: any;

      constructor(character: any, compost: any, item: any);
    }
  }
  export namespace lua.client.TimedActions.ISAddCompost {}
}
