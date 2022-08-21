/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISShutOffVehicleEngine:new */
    export class ISShutOffVehicleEngine extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      constructor(character: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISShutOffVehicleEngine {}
}
