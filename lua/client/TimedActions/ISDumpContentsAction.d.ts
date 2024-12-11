/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDumpContentsAction:new */
    export class ISDumpContentsAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sound: any;

      constructor(character: any, item: any, time: any);

      finalItem(itemType: any, ...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISDumpContentsAction {}
}
