/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISClothingExtraAction:new */
    export class ISClothingExtraAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      extra: any;

      item: any;

      constructor(character: any, item: any, extra: any);

      createItem: ((item: any, itemType: any) => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISClothingExtraAction {}
}
