/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISCleanBlood:new */
    export class ISCleanBlood extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      cleaner: any;

      sound: any;

      square: any;

      constructor(character: any, square: any, cleaner: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISCleanBlood {}
}
