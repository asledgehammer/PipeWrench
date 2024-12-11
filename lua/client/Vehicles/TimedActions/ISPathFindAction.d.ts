/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISPathFindAction:new */
    export class ISPathFindAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      onCompleteArgs: any;

      onCompleteFunc: any;

      onFailArgs: any;

      onFailFunc: any;

      pathToLocationF(character: any, targetX: any, targetY: any, targetZ: any, ...__args: never[]): any;

      pathToNearest(character: any, locations: any, ...__args: never[]): any;

      pathToVehicleAdjacent(character: any, vehicle: any, ...__args: never[]): any;

      pathToVehicleArea(character: any, vehicle: any, areaId: any, ...__args: never[]): any;

      pathToVehicleSeat(character: any, vehicle: any, seat: any, ...__args: never[]): any;

      setOnComplete(func: any, arg1: any, arg2: any, arg3: any, arg4: any, ...__args: never[]): any;

      setOnFail(func: any, arg1: any, arg2: any, arg3: any, arg4: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISPathFindAction {}
}
