/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Vehicles.TimedActions {
    /** @customConstructor ISRefuelFromGasPump:new */
    export class ISRefuelFromGasPump extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      amountSent: any;

      fuelStation: any;

      part: any;

      pumpStart: any;

      pumpTarget: any;

      sound: any;

      tankStart: any;

      tankTarget: any;

      vehicle: any;

      constructor(character: any, part: any, fuelStation: any);

      complete(...__args: never[]): any;

      serverStop(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Vehicles.TimedActions.ISRefuelFromGasPump {}
}
