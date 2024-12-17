/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISBurnCorpseAction:new */
    export class ISBurnCorpseAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      corpse: any;

      lighter: any;

      petrol: any;

      constructor(character: any, corpse: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISBurnCorpseAction {}
}
