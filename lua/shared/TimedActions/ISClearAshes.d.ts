/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISClearAshes:new */
    export class ISClearAshes extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ashes: any;

      spriteFrame: any;

      constructor(character: any, ashes: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISClearAshes {}
}
