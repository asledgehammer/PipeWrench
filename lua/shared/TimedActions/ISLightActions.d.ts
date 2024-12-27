/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISLightActions:new */
    export class ISLightActions extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ignoreHandsWounds: any;

      item: any;

      lightswitch: any;

      mode: any;

      constructor(mode: any, character: any, lightswitch: any, item: any);

      complete(...__args: never[]): any;

      completeAddBattery(...__args: never[]): any;

      completeAddLightBulb(...__args: never[]): any;

      completeModifyLamp(...__args: never[]): any;

      completeRemoveBattery(...__args: never[]): any;

      completeRemoveLightBulb(...__args: never[]): any;

      isValidAddBattery(...__args: never[]): any;

      isValidAddLightBulb(...__args: never[]): any;

      isValidModifyLamp(...__args: never[]): any;

      isValidRemoveBattery(...__args: never[]): any;

      isValidRemoveLightBulb(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISLightActions {}
}
