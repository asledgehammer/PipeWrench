/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRemoveGrass:new */
    export class ISRemoveGrass extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      spriteFrame: any;

      square: any;

      constructor(character: any, square: any);
    }
  }
  export namespace lua.client.TimedActions.ISRemoveGrass {}
}
