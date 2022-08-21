/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTakeFuel:new */
    export class ISTakeFuel extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fuelStation: any;

      itemStart: any;

      itemTarget: any;

      petrolCan: any;

      sound: any;

      square: any;

      constructor(character: any, fuelStation: any, petrolCan: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISTakeFuel {}
}
