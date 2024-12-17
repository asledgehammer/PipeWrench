/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISPickAxeGroundCoverItem:new */
    export class ISPickAxeGroundCoverItem extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      cornerCounter: any;

      item: any;

      objectType: any;

      pickAxe: any;

      spriteFrame: any;

      constructor(character: any, item: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISPickAxeGroundCoverItem {}
}
