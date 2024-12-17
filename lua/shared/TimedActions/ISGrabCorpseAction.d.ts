/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISGrabCorpseAction:new */
    export class ISGrabCorpseAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      corpse: any;

      corpseBody: any;

      forceProgressBar: any;

      sound: any;

      constructor(character: any, corpseBody: any);

      complete(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISGrabCorpseAction {}
}
