/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISUnbarricadeAction:new */
    export class ISUnbarricadeAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sound: any;

      constructor(character: any, item: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISUnbarricadeAction {}
}
