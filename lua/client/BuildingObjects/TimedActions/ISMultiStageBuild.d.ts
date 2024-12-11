/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.BuildingObjects.TimedActions {
    /** @customConstructor ISMultiStageBuild:new */
    export class ISMultiStageBuild extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sound: any;

      stage: any;

      constructor(character: any, stage: any, item: any, time: any);

      consumeMaterial(...__args: never[]): any;
    }
  }
  export namespace lua.client.BuildingObjects.TimedActions.ISMultiStageBuild {}
}
