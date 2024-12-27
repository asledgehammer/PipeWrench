/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISActivateCarBatteryChargerAction:new */
    export class ISActivateCarBatteryChargerAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      activate: any;

      charger: any;

      constructor(character: any, charger: any, activate: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISActivateCarBatteryChargerAction {}
}
