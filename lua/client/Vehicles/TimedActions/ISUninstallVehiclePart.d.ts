/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISUninstallVehiclePart:new */
    export class ISUninstallVehiclePart extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      jobType: any;

      part: any;

      vehicle: any;

      constructor(character: any, part: any, time: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISUninstallVehiclePart {}
}
