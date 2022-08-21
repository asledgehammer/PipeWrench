/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRemovePatch:new */
    export class ISRemovePatch extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      clothing: any;

      needle: any;

      part: any;

      constructor(character: any, clothing: any, part: any, needle: any);

      /** @noSelf */
      static chanceToGetPatchBack: (character: any) => any;
    }
  }
  export namespace lua.client.TimedActions.ISRemovePatch {}
}
