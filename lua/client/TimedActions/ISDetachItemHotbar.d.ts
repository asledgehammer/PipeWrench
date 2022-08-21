/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDetachItemHotbar:new */
    export class ISDetachItemHotbar extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      equipped: any;

      fromHotbar: any;

      hotbar: any;

      ignoreHandsWounds: any;

      item: any;

      useProgressBar: any;

      constructor(character: any, item: any);

      animEvent: ((event: any, parameter: any) => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISDetachItemHotbar {}
}
