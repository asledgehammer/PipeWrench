/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISForageAction:new */
    export class ISForageAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      currentTime: any;

      discardItems: any;

      forageIcon: any;

      itemDef: any;

      manager: any;

      started: any;

      targetContainer: any;

      zoneData: any;

      constructor(_forageIcon: any, _targetContainer: any, _discardItems: any);

      forage: (() => any) | any;
    }
  }
  export namespace lua.client.Foraging.ISForageAction {}
}
