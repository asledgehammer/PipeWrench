/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISLockVehicleDoor:new */
    export class ISLockVehicleDoor extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      part: any;

      vehicle: any;

      constructor(character: any, part: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISLockVehicleDoor {}
}
