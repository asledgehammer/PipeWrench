/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISPutOutFireDrum:new */
    export class ISPutOutFireDrum extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      metalDrum: any;

      constructor(character: any, metalDrum: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISPutOutFireDrum {}
}
