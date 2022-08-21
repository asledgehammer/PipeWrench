/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTakeWaterAction:new */
    export class ISTakeWaterAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      endUsedDelta: any;

      item: any;

      oldItem: any;

      sound: any;

      startUsedDelta: any;

      waterObject: any;

      waterUnit: any;

      constructor(character: any, item: any, waterUnit: any, waterObject: any, time: any, oldItem: any);

      stopSound: (() => any) | any;

      /** @noSelf */
      static SendTakeWaterCommand: (playerObj: any, object: any, units: any) => any;
    }
  }
  export namespace lua.client.TimedActions.ISTakeWaterAction {}
}
