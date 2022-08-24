/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISOpenCloseVehicleWindow:new */
    export class ISOpenCloseVehicleWindow extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      open: any;

      part: any;

      vehicle: any;

      window: any;

      constructor(character: any, part: any, open: any, time: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISOpenCloseVehicleWindow {}
}
