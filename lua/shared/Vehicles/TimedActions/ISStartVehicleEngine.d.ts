/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Vehicles.TimedActions {
    /** @customConstructor ISStartVehicleEngine:new */
    export class ISStartVehicleEngine extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      constructor(character: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Vehicles.TimedActions.ISStartVehicleEngine {}
}
