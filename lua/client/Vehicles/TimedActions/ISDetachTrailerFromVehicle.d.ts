/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISDetachTrailerFromVehicle:new */
    export class ISDetachTrailerFromVehicle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      attachment: any;

      hitchPos: any;

      vehicle: any;

      constructor(character: any, vehicle: any, attachment: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISDetachTrailerFromVehicle {}
}
