/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISAddTentAction:new */
    export class ISAddTentAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sprite: any;

      sq: any;

      constructor(character: any, sq: any, item: any, sprite: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISAddTentAction {}
}
