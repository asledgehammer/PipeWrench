/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISDestroyStuffAction:new */
    export class ISDestroyStuffAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      cornerCounter: any;

      item: any;

      sledge: any;

      spriteFrame: any;

      constructor(character: any, item: any, cornerCounter: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      getCornerWallSprite(wallSprite: any, ...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISDestroyStuffAction {}
}
