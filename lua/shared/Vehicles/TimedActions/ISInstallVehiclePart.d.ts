/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Vehicles.TimedActions {
    /** @customConstructor ISInstallVehiclePart:new */
    export class ISInstallVehiclePart extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      jobType: any;

      part: any;

      vehicle: any;

      constructor(character: any, part: any, item: any, maxTime: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Vehicles.TimedActions.ISInstallVehiclePart {}
}
