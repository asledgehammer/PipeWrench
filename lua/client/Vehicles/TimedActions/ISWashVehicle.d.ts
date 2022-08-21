/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
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

      removeBlood: ((bloodRemoved: any, waterUsed: any) => any) | any;

      useWater: ((units: any) => any) | any;

      /** @noSelf */
      static chooseArea: (character: any, vehicle: any) => any;

      /** @noSelf */
      static getWaterAmountForArea: (vehicle: any, id: any) => any;

      /** @noSelf */
      static getWaterAmountForPlayer: (character: any) => any;

      /** @noSelf */
      static hasBlood: (vehicle: any) => any;
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISWashVehicle {}
}
