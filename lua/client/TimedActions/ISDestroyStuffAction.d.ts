/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDestroyStuffAction:new */
    export class ISDestroyStuffAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      cornerCounter: any;

      item: any;

      sledge: any;

      spriteFrame: any;

      constructor(character: any, item: any, cornerCounter: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      getCornerWallSprite(wallSprite: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISDestroyStuffAction {}
}
