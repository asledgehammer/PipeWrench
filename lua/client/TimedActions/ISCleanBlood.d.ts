/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISCleanBlood:new */
    export class ISCleanBlood extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      sound: any;

      square: any;

      constructor(character: any, square: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISCleanBlood {}
}
