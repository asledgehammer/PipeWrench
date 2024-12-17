/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Vehicles.TimedActions {
    /** @customConstructor ISLockVehicleDoor:new */
    export class ISLockVehicleDoor extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      part: any;

      vehicle: any;

      constructor(character: any, part: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Vehicles.TimedActions.ISLockVehicleDoor {}
}
