/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Moveables {
    /** @customConstructor ISMoveablesAction:new */
    export class ISMoveablesAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      mode: any;

      moveCursor: any;

      moveProps: any;

      origSpriteName: any;

      sound: any;

      spriteFrame: any;

      square: any;

      constructor(character: any, _sq: any, _moveProps: any, _mode: any, _origSpriteName: any, _moveCursor: any);

      isReachableObjectType(...__args: never[]): any;

      isValidObject(...__args: never[]): any;

      setActionSound(...__args: never[]): any;
    }
  }
  export namespace lua.client.Moveables.ISMoveablesAction {}
}
