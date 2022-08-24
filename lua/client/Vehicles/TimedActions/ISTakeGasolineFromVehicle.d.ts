/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISTakeGasolineFromVehicle:new */
    export class ISTakeGasolineFromVehicle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      amountSent: any;

      item: any;

      itemStart: any;

      itemTarget: any;

      JerryCanLitres: any;

      part: any;

      sound: any;

      tankStart: any;

      tankTarget: any;

      vehicle: any;

      constructor(character: any, part: any, item: any, time: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISTakeGasolineFromVehicle {}
}
