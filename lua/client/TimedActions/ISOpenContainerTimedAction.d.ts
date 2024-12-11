/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISOpenContainerTimedAction:new */
    export class ISOpenContainerTimedAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      container: any;

      x: any;

      y: any;

      constructor(character: any, container: any, time: any, x: any, y: any);
    }
  }
  export namespace lua.client.TimedActions.ISOpenContainerTimedAction {}
}
