/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISExitVehicle:new */
    export class ISExitVehicle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      vehicle: any;

      constructor(character: any);

      getExtraLogData: (() => any) | any;
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISExitVehicle {}
}
