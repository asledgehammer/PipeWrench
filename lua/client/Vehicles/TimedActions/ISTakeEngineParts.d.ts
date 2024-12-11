/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISTakeEngineParts:new */
    export class ISTakeEngineParts extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      jobType: any;

      part: any;

      vehicle: any;

      constructor(character: any, part: any, item: any, time: any);

      getExtraLogData(...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISTakeEngineParts {}
}
