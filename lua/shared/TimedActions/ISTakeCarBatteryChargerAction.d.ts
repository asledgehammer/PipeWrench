/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISTakeCarBatteryChargerAction:new */
    export class ISTakeCarBatteryChargerAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      charger: any;

      constructor(character: any, charger: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISTakeCarBatteryChargerAction {}
}
