/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISLightActions:new */
    export class ISLightActions extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      lightswitch: any;

      mode: any;

      constructor(mode: any, character: any, lightswitch: any, item: any);

      isValidAddBattery: (() => any) | any;

      isValidAddLightBulb: (() => any) | any;

      isValidModifyLamp: (() => any) | any;

      isValidRemoveBattery: (() => any) | any;

      isValidRemoveLightBulb: (() => any) | any;

      performAddBattery: (() => any) | any;

      performAddLightBulb: (() => any) | any;

      performModifyLamp: (() => any) | any;

      performRemoveBattery: (() => any) | any;

      performRemoveLightBulb: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISLightActions {}
}
