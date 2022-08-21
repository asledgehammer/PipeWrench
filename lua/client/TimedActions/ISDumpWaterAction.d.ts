/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDumpWaterAction:new */
    export class ISDumpWaterAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sound: any;

      startUsedDelta: any;

      constructor(character: any, item: any);

      stopSound: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISDumpWaterAction {}
}
