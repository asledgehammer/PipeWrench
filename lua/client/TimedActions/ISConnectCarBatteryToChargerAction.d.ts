/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISConnectCarBatteryToChargerAction:new */
    export class ISConnectCarBatteryToChargerAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      battery: any;

      charger: any;

      constructor(character: any, charger: any, battery: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISConnectCarBatteryToChargerAction {}
}
