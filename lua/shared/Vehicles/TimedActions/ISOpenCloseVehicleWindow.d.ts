/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Vehicles.TimedActions {
    /** @customConstructor ISOpenCloseVehicleWindow:new */
    export class ISOpenCloseVehicleWindow extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ignoreHandsWounds: any;

      open: any;

      part: any;

      vehicle: any;

      window: any;

      constructor(character: any, part: any, open: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Vehicles.TimedActions.ISOpenCloseVehicleWindow {}
}
