/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISWearClothing:new */
    export class ISWearClothing extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fromHotbar: any;

      item: any;

      constructor(character: any, item: any, time: any);

      isAlreadyEquipped: ((item: any) => any) | any;
    }

    export abstract class WearClothingAnimations {
      static [id: string]: any;
    }
  }
  export namespace lua.client.TimedActions.ISWearClothing {}
}
