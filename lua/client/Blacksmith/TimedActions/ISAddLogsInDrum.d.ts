/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISAddLogsInDrum:new */
    export class ISAddLogsInDrum extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      add: any;

      metalDrum: any;

      constructor(character: any, metalDrum: any, add: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISAddLogsInDrum {}
}
