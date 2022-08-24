/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISAttachTrailerToVehicle:new */
    export class ISAttachTrailerToVehicle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      attachmentA: any;

      attachmentB: any;

      hitchPos: any;

      vehicleA: any;

      vehicleB: any;

      constructor(character: any, vehicleA: any, vehicleB: any, attachmentA: any, attachmentB: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISAttachTrailerToVehicle {}
}
