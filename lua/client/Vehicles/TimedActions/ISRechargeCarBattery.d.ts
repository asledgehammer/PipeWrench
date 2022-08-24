/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISRechargeCarBattery:new */
    export class ISRechargeCarBattery extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      battery: any;

      charger: any;

      constructor(battery: any, carCharger: any, chr: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISRechargeCarBattery {}
}
