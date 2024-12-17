/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISAttachItemHotbar:new */
    export class ISAttachItemHotbar extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fromHotbar: any;

      ignoreHandsWounds: any;

      item: any;

      slot: any;

      slotDef: any;

      slotIndex: any;

      useProgressBar: any;

      constructor(character: any, item: any, slot: any, slotIndex: any, slotDef: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISAttachItemHotbar {}
}
