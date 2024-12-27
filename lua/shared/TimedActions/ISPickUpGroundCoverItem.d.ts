/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISPickUpGroundCoverItem:new */
    export class ISPickUpGroundCoverItem extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      object: any;

      objectType: any;

      spriteFrame: any;

      square: any;

      constructor(character: any, square: any, object: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      /** @noSelf */
      static grabItemTime2: (playerObj: any, trashItemWeight: any, ...__args: never[]) => any;
    }

    export abstract class GroundCoverItems {
      static [id: string]: any;
    }
  }
  export namespace lua.shared.TimedActions.ISPickUpGroundCoverItem {}
}
