/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBuryCorpse:new */
    export class ISBuryCorpse extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      graves: any;

      shovel: any;

      constructor(character: any, graves: any, time: any, shovel: any);

      increaseCorpse: ((square: any) => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISBuryCorpse {}
}
