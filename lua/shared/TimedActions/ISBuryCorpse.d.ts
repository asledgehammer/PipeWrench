/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISBuryCorpse:new */
    export class ISBuryCorpse extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      graves: any;

      shovel: any;

      constructor(character: any, graves: any, shovel: any);

      complete(...__args: never[]): any;

      increaseCorpse(square: any, ...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISBuryCorpse {}
}
