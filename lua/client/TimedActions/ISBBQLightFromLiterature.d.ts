/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBBQLightFromLiterature:new */
    export class ISBBQLightFromLiterature extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bbq: any;

      item: any;

      lighter: any;

      sound: any;

      constructor(character: any, item: any, lighter: any, bbq: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISBBQLightFromLiterature {}
}
