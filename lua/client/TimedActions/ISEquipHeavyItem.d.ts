/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISEquipHeavyItem:new */
    export class ISEquipHeavyItem extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      constructor(character: any, item: any, time: any);

      isAlreadyTransferred: ((item: any) => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISEquipHeavyItem {}
}
