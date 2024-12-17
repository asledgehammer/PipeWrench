/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Entity.TimedActions {
    /** @customConstructor ISItemSlotRemoveAction:new */
    export class ISItemSlotRemoveAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      entity: any;

      item: any;

      itemSlot: any;

      resource: any;

      constructor(character: any, entity: any, resource: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Entity.TimedActions.ISItemSlotRemoveAction {}
}
