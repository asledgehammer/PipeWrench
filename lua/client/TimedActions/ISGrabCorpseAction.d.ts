/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISGrabCorpseAction:new */
    export class ISGrabCorpseAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      corpse: any;

      corpseBody: any;

      forceProgressBar: any;

      constructor(character: any, corpse: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISGrabCorpseAction {}
}
