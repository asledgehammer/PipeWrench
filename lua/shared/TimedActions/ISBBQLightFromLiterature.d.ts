/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISBBQLightFromLiterature:new */
    export class ISBBQLightFromLiterature extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bbq: any;

      item: any;

      lighter: any;

      sound: any;

      constructor(character: any, item: any, lighter: any, bbq: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISBBQLightFromLiterature {}
}
