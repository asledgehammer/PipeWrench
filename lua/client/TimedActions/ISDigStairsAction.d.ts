/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDigStairsAction:new */
    export class ISDigStairsAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      dir: any;

      item: any;

      square: any;

      constructor(character: any, item: any, sq: any, dir: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISDigStairsAction {}
}
