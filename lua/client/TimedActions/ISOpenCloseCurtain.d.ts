/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISOpenCloseCurtain:new */
    export class ISOpenCloseCurtain extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      constructor(character: any, item: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISOpenCloseCurtain {}
}
