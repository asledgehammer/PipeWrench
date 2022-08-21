/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISSmashVehicleWindow:new */
    export class ISSmashVehicleWindow extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      open: any;

      part: any;

      vehicle: any;

      window: any;

      constructor(character: any, part: any, open: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISSmashVehicleWindow {}
}
