/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISPutOutFire:new */
    export class ISPutOutFire extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      squares: any;

      usesPerSquare: any;

      constructor(character: any, squares: any, item: any, usesPerSquare: any, time: any);

      useItem(...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISPutOutFire {}
}
