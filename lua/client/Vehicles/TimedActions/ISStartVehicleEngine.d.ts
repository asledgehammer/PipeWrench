/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISStartVehicleEngine:new */
    export class ISStartVehicleEngine extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      constructor(character: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISStartVehicleEngine {}
}
