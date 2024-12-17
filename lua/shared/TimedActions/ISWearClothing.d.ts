/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISWearClothing:new */
    export class ISWearClothing extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      equipSound: any;

      fromHotbar: any;

      item: any;

      sound: any;

      constructor(character: any, item: any);

      complete(...__args: never[]): any;

      isAlreadyEquipped(item: any, ...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }

    export abstract class WearClothingAnimations {
      static [id: string]: any;
    }
  }
  export namespace lua.shared.TimedActions.ISWearClothing {}
}
