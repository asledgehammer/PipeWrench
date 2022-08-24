/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISAttachItemHotbar:new */
    export class ISAttachItemHotbar extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      equipped: any;

      fromHotbar: any;

      hotbar: any;

      ignoreHandsWounds: any;

      item: any;

      slot: any;

      slotDef: any;

      slotIndex: any;

      useProgressBar: any;

      constructor(character: any, item: any, slot: any, slotIndex: any, slotDef: any);

      animEvent: ((event: any, parameter: any) => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISAttachItemHotbar {}
}
