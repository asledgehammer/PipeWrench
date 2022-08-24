/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISHotwireVehicle:new */
    export class ISHotwireVehicle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      sound: any;

      constructor(character: any);

      stopSound: (() => any) | any;
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISHotwireVehicle {}
}
