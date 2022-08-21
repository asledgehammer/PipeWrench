/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISReadWorldMap:new */
    export class ISReadWorldMap extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      playerNum: any;

      constructor(character: any);
    }
  }
  export namespace lua.client.TimedActions.ISReadWorldMap {}
}
