/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISRemoveBurntVehicle:new */
    export class ISRemoveBurntVehicle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sound: any;

      vehicle: any;

      constructor(character: any, vehicle: any);

      checkAddItem: ((item: any, baseChance: any) => any) | any;
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISRemoveBurntVehicle {}
}
