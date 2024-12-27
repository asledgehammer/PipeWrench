/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISReadWorldMap:new */
    export class ISReadWorldMap extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      centerX: any;

      centerY: any;

      playerNum: any;

      zoom: any;

      constructor(character: any, centerX: any, centerY: any, zoom: any);
    }
  }
  export namespace lua.client.TimedActions.ISReadWorldMap {}
}
