/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISTakeFuel:new */
    export class ISTakeFuel extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      amount: any;

      fuelStation: any;

      itemStart: any;

      itemTarget: any;

      petrolCan: any;

      sound: any;

      square: any;

      constructor(character: any, fuelStation: any, petrolCan: any);

      complete(...__args: never[]): any;

      init(...__args: never[]): any;

      serverStart(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISTakeFuel {}
}
