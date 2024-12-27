/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Vehicles.TimedActions {
    /** @customConstructor ISWashVehicle:new */
    export class ISWashVehicle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      accumulator: any;

      amountSent: any;

      area: any;

      id: any;

      sound: any;

      vehicle: any;

      waterAccumulator: any;

      constructor(character: any, vehicle: any, id: any, area: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      removeBlood(bloodRemoved: any, waterUsed: any, ...__args: never[]): any;

      serverStart(...__args: never[]): any;

      updateWashing(...__args: never[]): any;

      useWater(units: any, ...__args: never[]): any;

      /** @noSelf */
      static chooseArea: (character: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWaterAmountForArea: (vehicle: any, id: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWaterAmountForPlayer: (character: any, ...__args: never[]) => any;

      /** @noSelf */
      static hasBlood: (vehicle: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Vehicles.TimedActions.ISWashVehicle {}
}
