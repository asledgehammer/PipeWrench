/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISPlumbItem:new */
    export class ISPlumbItem extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      itemToPipe: any;

      sound: any;

      wrench: any;

      constructor(character: any, itemToPipe: any, wrench: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISPlumbItem {}
}
