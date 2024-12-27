/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Moveables {
    /** @customConstructor ISMoveablesAction:new */
    export class ISMoveablesAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      direction: any;

      item: any;

      mode: any;

      moveCursor: any;

      object: any;

      origSpriteName: any;

      sound: any;

      spriteFrame: any;

      square: any;

      constructor(
        character: any,
        square: any,
        mode: any,
        origSpriteName: any,
        object: any,
        direction: any,
        item: any,
        moveCursor: any,
      );

      complete(...__args: never[]): any;

      isReachableObjectType(...__args: never[]): any;

      isValidObject(...__args: never[]): any;

      setActionSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Moveables.ISMoveablesAction {}
}
