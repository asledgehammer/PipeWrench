/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRepairClothing:new */
    export class ISRepairClothing extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      clothing: any;

      fabric: any;

      needle: any;

      part: any;

      thread: any;

      constructor(character: any, clothing: any, part: any, fabric: any, thread: any, needle: any);
    }
  }
  export namespace lua.client.TimedActions.ISRepairClothing {}
}
