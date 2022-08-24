/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISUnlockVehicleDoor:new */
    export class ISUnlockVehicleDoor extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      forceValid: any;

      part: any;

      seat: any;

      vehicle: any;

      constructor(character: any, part: any, seat: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISUnlockVehicleDoor {}
}
