/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISChopTreeAction:new */
    export class ISChopTreeAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      axe: any;

      forceProgressBar: any;

      spriteFrame: any;

      tree: any;

      constructor(character: any, tree: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      useEndurance(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISChopTreeAction {}
}
