/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISEnterVehicle:new */
    export class ISEnterVehicle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      seat: any;

      started: any;

      vehicle: any;

      constructor(character: any, vehicle: any, seat: any);

      getExtraLogData: (() => any) | any;
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISEnterVehicle {}
}
