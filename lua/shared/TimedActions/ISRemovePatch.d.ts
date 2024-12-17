/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISRemovePatch:new */
    export class ISRemovePatch extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      clothing: any;

      needle: any;

      part: any;

      sound: any;

      constructor(character: any, clothing: any, part: any, needle: any);

      complete(...__args: never[]): any;

      /** @noSelf */
      static chanceToGetPatchBack: (character: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.TimedActions.ISRemovePatch {}
}
