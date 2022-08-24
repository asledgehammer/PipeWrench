/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISOpenVehicleDoor:new */
    export class ISOpenVehicleDoor extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      vehicle: any;

      constructor(character: any, vehicle: any, partOrSeat: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISOpenVehicleDoor {}
}
