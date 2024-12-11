/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.BuildingObjects.TimedActions {
    /** @customConstructor ISPaintAction:new */
    export class ISPaintAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      isThump: any;

      painting: any;

      paintPot: any;

      sound: any;

      thumpable: any;

      constructor(character: any, thumpable: any, paintPot: any, painting: any, time: any);
    }
  }
  export namespace lua.client.BuildingObjects.TimedActions.ISPaintAction {}
}
