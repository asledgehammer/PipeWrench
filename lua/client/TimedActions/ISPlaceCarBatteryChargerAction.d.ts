/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISPlaceCarBatteryChargerAction:new */
    export class ISPlaceCarBatteryChargerAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      charger: any;

      constructor(character: any, charger: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISPlaceCarBatteryChargerAction {}
}
