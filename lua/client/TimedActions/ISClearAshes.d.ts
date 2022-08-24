/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISClearAshes:new */
    export class ISClearAshes extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ashes: any;

      spriteFrame: any;

      constructor(character: any, ashes: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISClearAshes {}
}
