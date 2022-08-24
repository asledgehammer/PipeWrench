/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISPathFindAction:new */
    export class ISPathFindAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      onCompleteArgs: any;

      onCompleteFunc: any;

      onFailArgs: any;

      onFailFunc: any;

      pathToLocationF: ((character: any, targetX: any, targetY: any, targetZ: any) => any) | any;

      pathToNearest: ((character: any, locations: any) => any) | any;

      pathToVehicleAdjacent: ((character: any, vehicle: any) => any) | any;

      pathToVehicleArea: ((character: any, vehicle: any, areaId: any) => any) | any;

      pathToVehicleSeat: ((character: any, vehicle: any, seat: any) => any) | any;

      setOnComplete: ((func: any, arg1: any, arg2: any, arg3: any, arg4: any) => any) | any;

      setOnFail: ((func: any, arg1: any, arg2: any, arg3: any, arg4: any) => any) | any;
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISPathFindAction {}
}
