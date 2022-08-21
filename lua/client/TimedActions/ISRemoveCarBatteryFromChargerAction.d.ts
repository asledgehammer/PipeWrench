/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRemoveCarBatteryFromChargerAction:new */
    export class ISRemoveCarBatteryFromChargerAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      charger: any;

      constructor(character: any, charger: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISRemoveCarBatteryFromChargerAction {}
}
