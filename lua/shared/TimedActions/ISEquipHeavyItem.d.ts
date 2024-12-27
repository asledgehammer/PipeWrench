/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISEquipHeavyItem:new */
    export class ISEquipHeavyItem extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      constructor(character: any, item: any);

      complete(...__args: never[]): any;

      isAlreadyTransferred(item: any, ...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISEquipHeavyItem {}
}
