/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISHutchGrabCorpseAction:new */
    export class ISHutchGrabCorpseAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      corpse: any;

      forceProgressBar: any;

      hutch: any;

      ignoreHandsWounds: any;

      index: any;

      constructor(character: any, index: any, hutch: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISHutchGrabCorpseAction {}
}
