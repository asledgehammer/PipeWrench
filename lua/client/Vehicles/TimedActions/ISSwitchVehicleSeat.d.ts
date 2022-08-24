/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISSwitchVehicleSeat:new */
    export class ISSwitchVehicleSeat extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      seatTo: any;

      constructor(character: any, seatTo: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISSwitchVehicleSeat {}
}
